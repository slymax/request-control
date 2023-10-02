export const parse = input => {
    const lines = input.split("\n").filter(line => /^\w+/.test(line));
    const rules = lines.map(line => line.replace(/[A-Z]+(?=\s)/g, match => match.toLowerCase()));
    return rules.map(rule => rule.split(" ")).map((rule, index) => ({
        "id": index + 1,
        "action": {
            "type": ["allow", "block"].includes(rule[0]) ? rule[0] : "redirect",
            "redirect": ["set", "remove", "redirect"].includes(rule[0]) ? {
                "regexSubstitution": rule[0] === "redirect" ? rule[3].replaceAll("$", "\\") : undefined,
                "transform": ["set", "remove"].includes(rule[0]) ? {
                    [rule[1]]: rule[0] === "set" ? rule[2] : ""
                } : undefined
            } : undefined
        },
        "condition": {
            "regexFilter": rule[{ "set": 4, "remove": 3 }[rule[0]] || 1],
            "resourceTypes": ["main_frame"]
        }
    }));
};
