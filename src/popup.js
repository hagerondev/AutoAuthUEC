button = document.getElementById("set");

button.addEventListener("click", function() {
    key = document.getElementById("key").value;
    chrome.runtime.sendMessage({ "key": key, type: "RegistKey" }, function (response) {
        window.close();
    });
});