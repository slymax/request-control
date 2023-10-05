import config from "./config.js";
import { parse } from "./parser.js";
import { editor, languages } from "./monaco.js";

languages.register({ id: "language" });
languages.setMonarchTokensProvider("language", {
    tokenizer: { root: [...config.tokens, [/^#.*/, "comment"]] }
});

editor.defineTheme("theme", {
    rules: [
        { token: "highlight", fontStyle: "bold" },
        { token: "comment", foreground: "#9e9e9e" }
    ],
    colors: { "editor.foreground": "#000000" },
    base: "vs"
});

const input = editor.create(document.getElementById("editor"), {
    value: localStorage.value || config.value,
    ...config.editor
});

const unregisterServiceWorkers = input => {
    const text = input.split("\n").filter(line => /^\w+/.test(line)).join("\n");
    const origins = Object.entries(config.serviceWorkers).map(([domain, origin]) => {
        const includesEscapedDomain = text.includes(domain.replace(".", "\\."));
        return text.includes(domain) || includesEscapedDomain ? origin : false;
    }).filter(Boolean);

    const options = {};

    if (browser) {
        options.hostnames = origins.map(origin => new URL(origin).hostname);
    } else {
        options.origins = origins;
    }

    return chrome.browsingData.remove(options, {
        "serviceWorkers": true
    });
};

const button = document.getElementById("save");

const save = async value => {
    try {
        const rules = await chrome.declarativeNetRequest.getDynamicRules();
        await chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: rules.map(rule => rule.id),
            addRules: parse(value)
        });
        await unregisterServiceWorkers(value);
        localStorage.value = value;
        button.disabled = true;
    } catch (error) {
        alert(error);
    }
};

button.addEventListener("click", () => {
    save(input.getValue());
});

document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        const value = input.getValue();
        !button.disabled && save(value);
    }
});

!localStorage.value && save(config.value);

input.onDidChangeModelContent(() => {
    button.disabled = false;
});
