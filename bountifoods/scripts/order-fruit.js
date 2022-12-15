var data;

fetch("scripts/fruit.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        data = jsonObject;
    })

function cap(string) {
    let outstring = "";
    let parts = string.split(' ')
    for (let i = 0; i < parts.length; i++) {
        outstring += parts[i][0].toUpperCase() + parts[i].substring(1)
        if (i != parts.length) {outstring += " "}
    }
    return outstring;
}

document.querySelector(".card.creator form button").onclick = function () {
    let count = localStorage.getItem("count");
    if (count == null) {count = 0; console.log("oops")}
    localStorage.setItem("count", parseInt(count) + 1);

    // Get everything from the form...
    let fruits = [document.getElementById("fruit1").value,
                  document.getElementById("fruit2").value,
                  document.getElementById("fruit3").value];
    let name   = document.getElementById("name").value;
    let email  = document.getElementById("email").value;
    let phone  = document.getElementById("phone").value;
    let time   = new Date();
    let instructions = document.getElementById("instructions").value;

    // Check to see if form is completed...
    if (name == ""  ||
        email == "" ||
        phone == "") {return;}

    // Clear the form...

    document.getElementById("fruit1").selectedIndex = 0;
    document.getElementById("fruit2").selectedIndex = 0;
    document.getElementById("fruit3").selectedIndex = 0;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("instructions").value = "";

    var nutrition = {
        "carbohydrates": 0,
        "protein": 0,
        "fat": 0,
        "calories": 0,
        "sugar": 0
    }

    fruits.forEach(function (fruit) {
        var element = document.createElement("p");
        element.textContent = fruit;

        var index = 0;
        while (data[index].name != fruit) {index++;}

        nutrition.carbohydrates += data[index].nutritions.carbohydrates;
        nutrition.protein       += data[index].nutritions.protein;
        nutrition.fat           += data[index].nutritions.fat;
        nutrition.calories      += data[index].nutritions.calories;
        nutrition.sugar         += data[index].nutritions.sugar;
    });

    var order = document.createElement("div");
    order.classList.add("order");

    var timeElement = document.createElement("h6");
    timeElement.classList.add("time");
    timeElement.textContent = `${time.getMonth()}/${time.getDate()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
    order.appendChild(timeElement);

    var nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.textContent = name;
    order.appendChild(nameElement);

    var phoneElement = document.createElement("p");
    phoneElement.classList.add("phone");
    phoneElement.textContent = phone;
    order.appendChild(phoneElement);

    var emailElement = document.createElement("p");
    emailElement.classList.add("email");
    emailElement.textContent = email;
    order.appendChild(emailElement);

    var fruitheader = document.createElement("h6");
    fruitheader.classList.add("fruit-header");
    fruitheader.textContent = "Fruit";
    order.appendChild(fruitheader);

    for (var i = 0; i < fruits.length; i++) {
        var fruitElement = document.createElement("p");
        fruitElement.classList.add("fruit");
        fruitElement.classList.add(`n${i + 1}`);
        fruitElement.textContent = fruits[i];
        order.appendChild(fruitElement);
    }

    var table = document.createElement("table");
    var header = document.createElement("tr");
    var headerdata = document.createElement("th");
    headerdata.setAttribute("colspan", "2");
    headerdata.textContent = "Nutrition";
    header.appendChild(headerdata);
    table.appendChild(header);

    for (let key in nutrition) {
        var row = document.createElement("tr");
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");

        col1.textContent = cap(key);
        col2.textContent = nutrition[key].toFixed(1);

        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
    }

    order.appendChild(table);

    var instructionsheader = document.createElement("h6");
    instructionsheader.classList.add("instructions-header");
    instructionsheader.textContent = "Special Instructions";
    order.appendChild(instructionsheader);

    var instructionsElement = document.createElement("p");
    instructionsElement.classList.add("instructions")
    instructionsElement.textContent = instructions;
    order.appendChild(instructionsElement);

    document.getElementById("history").appendChild(order);
}