console.log("Options script loaded.");

const saveButton = document.getElementById("saveButton");
const text = document.getElementById("textInput");
const timer = document.getElementById("timer");
const saveTimer = document.getElementById("saveTimer");

saveButton.addEventListener("click", () => {
    console.log(`Save button clicked. ${text.value}`);
    chrome.storage.sync.set({
        name: text.value
    },()=>{
        console.log(`Saved in LocaL Storage`);
    })

});

saveTimer.addEventListener("click", () => {
    chrome.storage.sync.set({
        notifyTime: timer.value
    },()=>{
     })
});


chrome.storage.sync.get(["name","testKey","notifyTime"],(data)=>{
    console.log(`Read from  LocaL Storage `);
    console.log(data);
    console.log(data.name);
    console.log(data.testKey);
    text.value=data.name || "Default Value";
    timer.value=data.notifyTime || "Default Value";

});