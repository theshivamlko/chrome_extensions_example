

const app=document.getElementById("app");
const adplaceholder = document.getElementsByClassName("adplaceholder").item(0);

if (adplaceholder && adplaceholder.parentNode) {
	adplaceholder.parentNode.removeChild(adplaceholder);
}



