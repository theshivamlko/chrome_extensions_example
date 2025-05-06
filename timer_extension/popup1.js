const timeElement = document.getElementById("time");
const counter = document.getElementById("counter");
const name = document.getElementById("name");



function updateTime() {
    chrome.storage.sync.get(["name", "timer"], (data) => {

        name.textContent = data.name || "Default Value";
        let timer = data.timer || 0;
        counter.textContent = `Counter: ${timer}`;

    });


    const currentTime = new Date().toLocaleTimeString();

    timeElement.textContent = `Time is  ${currentTime}`;

}


chrome.action.setBadgeText({
    text: "TimeBadge",
}, () => {

    console.log("Current Time: ", new Date().toLocaleTimeString());


});



console.log("This from popup1.js");
console.log(this); // Window object in popup context




updateTime();
setInterval(() => {
    updateTime();
},1000);
