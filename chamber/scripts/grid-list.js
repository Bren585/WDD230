const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid-list");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
	gridbutton.classList.add("toggle");
	listbutton.classList.remove("toggle");

});

listbutton.addEventListener("click", () =>  {
	display.classList.add("list");
	display.classList.remove("grid");
	listbutton.classList.add("toggle");
	gridbutton.classList.remove("toggle");
});
