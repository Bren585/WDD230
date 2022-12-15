function createOption(fruit) {
    var option = document.createElement("option");

    option.textContent = fruit.name
    option.setAttribute("value", fruit.name);
    
    document.querySelector("#fruit1").appendChild(option);
    document.querySelector("#fruit2").appendChild(option.cloneNode(true));
    document.querySelector("#fruit3").appendChild(option.cloneNode(true));
}

fetch("scripts/fruit.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (fruits) {
        fruits.forEach(createOption);  
    });