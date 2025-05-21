console.log("TV Show Ext Content script loaded");


const text=[];

let divElements = document.getElementsByClassName('nwVKo');
let aElements = document.getElementsByTagName('a');

for (let i = 0; i < divElements.length; i++) {
  divElements[i].style.backgroundColor = 'yellow';
}

for (let i = 0; i < aElements.length; i++) {
    text.push(aElements[i].innerText);
}

chrome.storage.local.set({
    text
})

chrome.runtime.sendMessage(text,(res)=>{
    console.log("Content script message Received");
    console.log(res.status);
});
