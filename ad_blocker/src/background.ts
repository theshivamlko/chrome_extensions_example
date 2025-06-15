chrome.webRequest.onBeforeRequest.addListener((details) => {
    console.log("onBeforeRequest", details)

    const url=details.url;
    const filters = ["googlesyndication.com", "googleadservices.com",
        "youtube.com/api/stats/ads", "youtube.com/pagead/adview",
        "doubleclick.net"];


    for (const filter of filters) {
        console.log("Blocked URL1:",filter,"\n", url);
        console.log("Blocked URL2:",url.indexOf(filter));
        if (url.indexOf(filter)!=-1) {
            console.log("Blocked URL3:", url);
             return { cancel: true };
        }
    }



    return {
        cancel: false
    }
}, {
    urls:["<all_urls>"]
    // urls: ["*://*.googlesyndication.com/*", "*://*.googleadservices.com/*",
    //     "*://*.youtube.com/api/stats/ads*", "*://*.youtube.com/pagead/adview*",
    // "*://*.doubleclick.net/*"]

}, ["blocking"]);

chrome.webRequest.onBeforeRedirect.addListener((details) => {
    console.log("onBeforeRedirect", details)


}, {
    urls: ["<all_urls>"]
});

chrome.webRequest.onResponseStarted.addListener((details) => {
    console.log("onResponseStarted", details)
}, {
    urls: ["<all_urls>"]
});

chrome.webRequest.onCompleted.addListener((details) => {
    console.log("onResponseStarted", details)
}, {
    urls: ["<all_urls>"]
});



