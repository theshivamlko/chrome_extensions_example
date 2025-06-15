

const rules: {
    [url: string]: () => void
}={
    "timesofindia.indiatimes.com":removeSidebar
}

 
function removeSidebar(): void {
    const container = document.getElementById("toi-article-container-119254020");
    if (container) {
        const targetDiv = Array.from(container.getElementsByClassName("eTaBv article_rhs Life & Style")).find(
            el => el.tagName === "DIV"
        );
        if (targetDiv && targetDiv.parentNode) {
            targetDiv.parentNode.removeChild(targetDiv);
        }
    }
}



const matchedRule = Object.keys(rules).find(ruleUrl => document.URL.includes(ruleUrl));
if (matchedRule) {
    console.log("Applying rule for:", matchedRule);
    rules[matchedRule]();
}

