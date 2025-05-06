console.log("Options script loaded.");

const saveButton = document.getElementById("saveButton");
const text = document.getElementById("textInput");

saveButton.addEventListener("click", () => {

    console.log(`Save button clicked. ${text.value}`);
});