let d = new Date(document.lastModified);
let fullDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
document.getElementById("lastModified").textContent = fullDate;
document.getElementById("year").textContent = new Date().getFullYear();
d = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()];
let month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "November", "September", "October", "November", "December"][d.getMonth()]
document.getElementById("todaysDate").textContent = day + ", " + String(d.getDate()) + " " + month + " " + d.getFullYear();

if (d.getDay() == 1 || d.getDay() == 2) {
    document.getElementById("announcement").style.display = "block";
}