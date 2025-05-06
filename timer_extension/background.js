console.log("Background script loaded.");


console.log("This from Background Script");
console.log(this); // ServiceWorkerGlobalScope

// setInterval(() => {
//     console.log("SetInterval");

// }, 1000);

chrome.alarms.create('myAlarm',{
    "periodInMinutes": 1 / 30,
});

chrome.alarms.onAlarm.addListener((alarm) => {

    console.log("This from Background onAlarm");
    chrome.storage.sync.get(["timer"],(data)=>{
        let timer = data.timer || 0;

        timer += 1;
        chrome.storage.sync.set({timer: timer},()=>{
        });

        chrome.action.setBadgeText({
            text: `T-${timer}`,
        }, () => {
            console.log("Current Time: ", new Date().toLocaleTimeString());
        
        });


        // Show notification
        if( timer % 30 === 0 ){
            this.registration.showNotification("Chrome Timer",{
                body:"Notification Body "+timer,
                icon: "icon.png",
            } );
        }
        

});
});

console.log("This Notification from Background Script after setInterval");





