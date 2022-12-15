count = localStorage.getItem("count");
if (count == null) {count = 0};

document.getElementById("count").textContent = count;

if (count == 1) {document.getElementById("plural").style.display = "none";}