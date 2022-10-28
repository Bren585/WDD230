message = document.getElementById("days-since")

last = localStorage.getItem("last-vist")

if (last == null) {
    last = new Date()
} 

message.textContent = Math.floor((new Date() - last) / (1000 * 3600 * 24));
localStorage.setItem("last-visit", new Date())