console.log("Options script loaded.");

const saveButton = document.getElementById("saveButton");
const text = document.getElementById("textInput");

saveButton.addEventListener("click", () => {
    console.log(`Save button clicked. ${text.value}`);
    chrome.storage.sync.set({
        name: text.value
    },()=>{
        console.log(`Saved in LocaL Storage`);
    })

});


chrome.storage.sync.get(["name","testKey"],(data)=>{
    console.log(`Read from  LocaL Storage `);
    console.log(data);
    console.log(data.name);

});