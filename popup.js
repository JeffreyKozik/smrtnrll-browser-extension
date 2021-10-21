// https://stackoverflow.com/questions/49546645/clicking-buttons-on-a-website-with-a-chrome-extension
function automate_task(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "smrtnrll.js"});
    });
}

document.getElementById("smrtnrll_button").addEventListener('click', automate_task);
// below vesion if for Manifest version 3, haven't figured out how to implement this yet, saving for later
// function automate_task(){
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.scripting.executeScript(
//             {
//                 target: {tabID: tabs[0].id},
//                 files: ["smrtnrll.js"]
//             });
//     });
// }
//
// let smrtnrll_button = document.getElementById("smrtnrll_button");
// if (smrtnrll_button){
//     console.log("button exists");
//     document.getElementById("smrtnrll_button").addEventListener('click', automate_task);
// }
