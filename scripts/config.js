const CONFIG = {
  // the category, name, key, url, search path and color for your commands
  // if none of the specified keys are matched, the "*" key is used
  commands: [
    [null, "Google", "*", "https://encrypted.google.com", "/search?q={}", null],

    ["Main", "Calendar", "c", "https://calendar.google.com/calendar/render", "?q={}", "#4482ef"],
    ["Main", "Drive", "d", "https://drive.google.com/drive", "/search?q={}", "#1da362"],
    ["Main", "Inbox", "i", "https://inbox.google.com", "/search/{}", "#4285f4"],
    ["Main", "Evernote", "e", "https://www.evernote.com/Home.action", null, "#2dbe5f"],

    ["Development", "DigitalOcean", "o", "https://digitalocean.com", "/community/search?q={}", "#0080ff"],
    ["Development", "GitHub", "g", "https://github.com", "/search?q={}", "#333"],

    ["Social", "Facebook", "f", "https://www.facebook.com", "/search/top/?q={}", "#3b5998"],
    ["Social", "Instagram", "I", "https://www.instagram.com", null, "#833ab4"],
    ["Social", "Reddit", "r", "https://www.reddit.com", "/search?q={}", "#5f99cf"],
    ["Social", "Twitter", "t", "https://twitter.com", "/search?q={}", "#1da1f2"],

    ["Education", "Chamilo", "ch", "https://chamilo.hogent.be", null, "#2e75a3"],

    ["Entertainment", "Play Music", "m", "https://play.google.com/music/listen", "#/sr/{}", "#f45731"],
    ["Entertainment", "SoundCloud", "S", "https://soundcloud.com/discover", "/search?q={}", "#ff8800"],
    ["Entertainment", "Steam", "s", "https://store.steampowered.com", "/search/?term=test={}", "#15497b"],
    ["Entertainment", "YouTube", "y", "https://youtube.com", "/results?search_query={}", "#cd201f"],

    ["Other", "Amazon", "a", "https://amazon.de", "/s/&field-keywords={}", "#f79b34"],
    ["Other", "NAS", "n", "http://192.168.0.135", null, "#07606e"],
    ["Other", "IP", "IP", "https://ipleak.net", "/q?={}", "#94d5dd"],
    ["Other", "Photos", "p", "https://photos.google.com", "/search/{}", "#9c27b0"],
  ],
  // give suggestions as you type
  suggestions: true,
  // max amount of suggestions that will ever be displayed
  suggestionsLimit: 5,
  // the order and limit for each suggestion influencer
  // "Default" suggestions come from CONFIG.defaultSuggestions
  // "DuckDuckGo" suggestions come from the duck duck go search api
  // "History" suggestions come from your previously entered queries
  influencers: [
    { name: "Default", limit: 5 },
    { name: "History", limit: 2 },
    { name: "DuckDuckGo", limit: 5 },
  ],
  // default search suggestions for the specified queries
  defaultSuggestions: {
    "r": ["r/r/unixporn", "r/r/startpages", "r/r/webdev", "r/r/technology", "r/r/portland"]
  },
  // instantly redirect when a key is matched
  // put a space before any other queries to prevent unwanted redirects
  instantRedirect: false,
  // open queries in a new tab
  newTab: true,
  // dynamic background colors when command domains are matched
  colors: true,
  // the delimiter between the key and your search query
  // e.g. to search GitHub for potatoes you"d type "g:potatoes"
  searchDelimiter: ":",
  // the delimiter between the key and a path
  // e.g. type "r/r/unixporn" to go to "reddit.com/r/unixporn"
  pathDelimiter: "/",
  // the delimiter between the hours and minutes in the clock
  clockDelimiter: "&nbsp;",
  // note: you can pass in your search query via the q query param
  // e.g. going to file:///path/to/tilde/index.html?q=hamsters is equivalent
  // to typing "hamsters" and pressing enter
};
