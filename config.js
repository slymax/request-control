export default {
    serviceWorkers: {
        "twitter.com": "https://twitter.com",
        "youtu.be": "https://www.youtube.com",
        "youtube.com": "https://www.youtube.com"
    },
    editor: {
        "renderLineHighlight": "none",
        "occurrencesHighlight": false,
        "scrollBeyondLastLine": false,
        "minimap": { "enabled": false },
        "selectionHighlight": false,
        "quickSuggestions": false,
        "overviewRulerLanes": 0,
        "language": "language",
        "lineNumbers": "off",
        "contextmenu": false,
        "wordWrap": "on",
        "folding": false,
        "links": false,
        "scrollbar": {
            "useShadows": false,
            "horizontal": "hidden",
            "vertical": "hidden"
        }
    },
    tokens: ["allow", "block", "for", "fragment", "from", "host", "password", "path", "port", "query", "redirect", "remove", "scheme", "set", "to", "username"].map(token => [token.toUpperCase(), "highlight"]),
    value: [
        "# Welcome to the Request Control Editor!",
        "",
        "# You can read the full documentation at https://github.com/slymax/request-control. Here are some examples to get you started:",
        "",
        "# redirect mobile wikipedia to desktop version",
        "# REDIRECT https://(.*?).m.wikipedia.org/(.*) TO https://$1.wikipedia.org/$2",
        "",
        "# use old wikipedia layout",
        "# SET QUERY ?useskin=vector FOR https://en.wikipedia.org/wiki/(.*)",
        "",
        "# use old reddit design",
        "# REDIRECT https://www.reddit.com/(.*) TO https://old.reddit.com/$1",
        "",
        "# redirect from twitter to nitter",
        "# REDIRECT https://twitter.com/(.*) TO https://nitter.net/$1",
        "",
        "# enforce https for all urls",
        "# SET SCHEME https FOR http://(.*)"
    ].join("\n")
};
