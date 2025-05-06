const timeElement = document.getElementById("time");

const currentTime = new Date().toLocaleTimeString();

timeElement.textContent = `Time is  ${currentTime}`;



chrome.action.setBadgeText({
    text: "TimeBadge",
}, () => {

    console.log("Current Time: ", new Date().toLocaleTimeString());


});