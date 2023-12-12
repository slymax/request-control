export default {
    serviceWorkers: {
        "twitter.com": "https://twitter.com",
        "youtu.be": "https://www.youtube.com",
        "youtube.com": "https://www.youtube.com"
    },
    editorSettings: {
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
        "theme": "theme",
        "wordWrap": "on",
        "folding": false,
        "links": false,
        "scrollbar": {
            "useShadows": false,
            "horizontal": "hidden",
            "vertical": "hidden"
        }
    },
    highlightedTokens: ["allow", "block", "for", "fragment", "from", "host", "password", "path", "port", "query", "redirect", "remove", "scheme", "set", "to", "username"],
    defaultValue: `
        # Welcome to the Request Control Editor!

        # Below are some examples to get you started. You can read the full documentation at https://github.com/slymax/request-control.

        # redirect mobile wikipedia to desktop version
        # REDIRECT ^https://(.*?).m.wikipedia.org TO https://$1.wikipedia.org

        # use old wikipedia layout
        # SET QUERY ?useskin=vector FOR ^https://en.wikipedia.org/wiki

        # use old reddit design
        # REDIRECT ^https://www.reddit.com TO https://old.reddit.com

        # redirect from twitter to nitter
        # REDIRECT ^https://twitter.com TO https://nitter.net

        # enforce https for all urls
        # SET SCHEME https FOR http://(.*)
    `
};
