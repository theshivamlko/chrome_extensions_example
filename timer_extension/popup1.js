const timeElement = document.getElementById("time");
const counter = document.getElementById("counter");
const name = document.getElementById("name");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");



function updateTime() {
    chrome.storage.sync.get(["name", "timer","isRunning"], (data) => {
        if (!(data.isRunning ?? false)) {
            return;
        }

        name.textContent = data.name || "Default Value";
        let timer = data.timer || 0;
        counter.textContent = `Counter: ${timer}`;

        const currentTime = new Date().toLocaleTimeString();
        timeElement.textContent = `Time is  ${currentTime}`;
    });

   
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
}, 1000);


startButton.addEventListener("click", () => {

    chrome.storage.sync.set({
        isRunning: true
    });
});

stopButton.addEventListener("click", () => {

    chrome.storage.sync.set({
        isRunning: false
    });
});

resetButton.addEventListener("click", () => {

    chrome.storage.sync.set({
        isRunning: false,
        timer: 0
    });
});