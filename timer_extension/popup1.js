const timeElement = document.getElementById("time");
const   name   = document.getElementById("name");

const currentTime = new Date().toLocaleTimeString();

timeElement.textContent = `Time is  ${currentTime}`;



chrome.action.setBadgeText({
    text: "TimeBadge",
}, () => {

    console.log("Current Time: ", new Date().toLocaleTimeString());


});

chrome.storage.sync.get(["name"],(data)=>{
 
    name.textContent =data.name || "Default Value";
});