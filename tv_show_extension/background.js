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
        parentId:"some_unique_id1",
        contexts: ['page']
    },);

    chrome.contextMenus.create({
        title: "Child Menu",
        id: "some_unique_id5",
        parentId:"some_unique_id4",
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
        }

    })


});
