




chrome.runtime.onInstalled.addListener((details) => {

    // reason: 'update' or 'install'
    // previous_version after update
    console.log(`Extension  Installed or Updated \`${new Date().toLocaleTimeString()}\``);
    console.log(details);

    chrome.contextMenus.create({
        title: "Get this TV Show Info",
        id: "some_unique_id1",
        contexts: ['page']
    },)

    chrome.contextMenus.create({
        title: "Read Link TV Show Info",
        id: "some_unique_id2",
        contexts: ['link']
    },)

    chrome.contextMenus.create({
        title: "Search TV Show Info",
        id: "some_unique_id3",
        contexts: ['selection']
    },)


    chrome.contextMenus.create({
        title: "Child Menu",
        id: "some_unique_id4",
        parentId: "some_unique_id1",
        contexts: ['page']
    },);

    chrome.contextMenus.create({
        title: "Child Menu",
        id: "some_unique_id5",
        parentId: "some_unique_id4",
        contexts: ['page']
    },);


    chrome.contextMenus.onClicked.addListener((details) => {

        console.log(details);
        if (details.menuItemId === "some_unique_id1") {
            console.log("Page Option");
            console.log(details.selectionText);
            console.log(details.pageUrl);
        } else if (details.menuItemId === "some_unique_id2") {
            console.log("Link Option");
            console.log(details.selectionText);
            console.log(details.pageUrl);
        } else if (details.menuItemId === "some_unique_id3") {
            console.log("Select Option");
            console.log(details.selectionText);
            console.log(details.pageUrl);

            // chrome.search.query({
            //     disposition: 'NEW_TAB',
            //     text: `IMDB ${details.selectionText}`
            // })

            // chrome.tabs.create({
            //     active: true,
            //     url: `https://www.facebook.com`
            // })


            // chrome.tabs.query({
            //     currentWindow:true
            // },(tabs)=>{
            //     console.log("tabs query");
            //     console.log(tabs);
            // })


            fetch(`https://api.tvmaze.com/search/shows?q=${details.selectionText}`).then(async res=>{
                console.log("then");
                let list=await res.json();
                console.log(list[0].show.name);
                console.log(list[0].show.summary);

                chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                    if (tabs && tabs.length > 0) {
                        console.log("Response Sent");
                        chrome.tabs.sendMessage(tabs[0].id, list[0].show);
                    }
                });

            }).catch(err=>{
                console.log("catch");
                console.log(err);
            })

        }

    });
});

chrome.storage.local.get(["text"], (data) => {
    console.log("Background storage");
    console.log(data.text);
});


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("onMessage");
    console.log(msg);
    console.log(sender);

    sendResponse({status: 'Hello'});
    console.log("Tab Id " + sender.tab.id);
    chrome.tabs.sendMessage(sender.tab.id, 'Hello To Tab from Background');

});


