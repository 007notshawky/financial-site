
var chatBox = document.querySelector(".chat-box");
var toggleButton = document.querySelector(".chat-header button");
var chatContent = document.querySelector(".chat-content");

toggleButton.addEventListener("click", function() {
    if (chatContent.style.maxHeight) {
    chatContent.style.maxHeight = null;
    chatContent.classList.remove("active");
    toggleButton.innerText = "Show";
    $(".fixed-positioning").css("padding-bottom", "0");
    } else {
    chatContent.style.maxHeight = chatContent.scrollHeight + 30 + "px";
    chatContent.classList.add("active");
    toggleButton.innerText = "Hide";
    document.querySelector("#messageReceived").style.display = "none";
    }
});

// Outside click closes the chat box
window.addEventListener("click", function(e) {
    if (!chatBox.contains(e.target)) {
    chatContent.style.maxHeight = null;
    chatContent.classList.remove("active");
    toggleButton.innerText = "Show";
    $(".fixed-positioning").css("padding-bottom", "0");
    }
});

(function() {
    chatContent.style.maxHeight = chatContent.scrollHeight + 60 + "px";
    chatContent.classList.add("active");
    toggleButton.innerText = "Hide";
})();

//Display the current time in Chat Box
var time = new Date();
document.querySelector("#theCurrentTime").innerHTML = time.toLocaleString(
    "en-US",
    { hour: "numeric", minute: "numeric", hour12: true }
);









