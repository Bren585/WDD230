const requestURL = "scripts/data.json";
const spotlight  = document.querySelector('.spotlights');

function displayMember(member) {
    //Create the card
    let card = document.createElement("section");
    card.classList.add("card");

    // Name
    let name = document.createElement("h3");
    name.textContent = member["name"];
    card.appendChild(name);

    // Logo
    let logo = document.createElement("img");
    if (member["logo"] == "") {logo.setAttribute("src", "https://placehold.jp/b8b8b8/ffffff/150x150.png?text=Logo%20Not%20Found");}
    else                      {logo.setAttribute("src", `images/${member["logo"]}`);}
    logo.setAttribute("alt", `${member["name"]} Logo`)
    card.appendChild(logo);

    // Tag
    let tag = document.createElement("h4");
    tag.textContent = member["tag"];
    card.appendChild(tag);

    card.appendChild(document.createElement("hr"));
    
    // Email
    let email = document.createElement("p");
    email.textContent = member["email"];
    email.classList.add("email");
    card.appendChild(email);

    // Phone & website
    let phone = document.createElement("p");
    if (member["phone"] == "") {phone.innerHTML = `+999-9999-9999 | <a href="${member["website"]}">Website</a>`;}
    else                       {phone.innerHTML = `${member["phone"]} | <a href="${member["website"]}">Website</a>`;}
    card.appendChild(phone);
    
    // Attach the card to the directory
    spotlight.appendChild(card);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const members = jsonObject['members'];
        let spotlights = [];
        while (spotlights.length < 3) {
            const id = Math.floor(Math.random() * members.length);
            console.log(`id : ${id}`);
            console.log(`member-level: ${members[id]["member-level"]}`)
            if (members[id]["member-level"] == "Gold" || members[id]["member-level"] == "Silver") {
                spotlights.push(members[id]);
                members.splice(id, id);
            }
        }
        spotlights.forEach(displayMember);  
    });