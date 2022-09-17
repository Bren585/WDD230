let d = new Date(document.lastModified);
let fullDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
document.getElementById("lastModified").textContent = fullDate;
document.getElementById("year").textContent = new Date().getFullYear();