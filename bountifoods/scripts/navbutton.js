const nav = document.getElementById("nav");
const btn = document.getElementById("navButton");

btn.onclick = function () {
    if (nav.style.display == "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

window.addEventListener("resize", function(event) {
    if (document.body.clientWidth > 685) {
        if (document.body.clientWidth > 985) {
            nav.style.display = "flex";
        } else { 
            nav.style.display = "block";
        }
        btn.style.display = "none";
    } else {
        nav.style.display = "none";
        btn.style.display = "block";
    }
})
