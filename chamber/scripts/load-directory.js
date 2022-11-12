const requestURL = "scripts/data.json";
const directory = document.querySelector('#directory');

function displayMember(member) {
    //Create the card
    let card = document.createElement("section");
    card.classList.add("card");

    // Logo
    let logo = document.createElement("img");
    if (member["logo"] == "") {logo.setAttribute("src", "https://placehold.jp/b8b8b8/ffffff/150x150.png?text=Logo%20Not%20Found");}
    else                      {logo.setAttribute("src", `images/${member["logo"]}`);}
    card.appendChild(logo);

    // Name
    let name = document.createElement("h3");
    name.textContent = member["name"];
    card.appendChild(name);

    // Tag
    let tag = document.createElement("h4");
    tag.textContent = member["tag"];
    tag.classList.add("grid-only");
    card.appendChild(tag);

    // Member Level
    let level = document.createElement("p");
    level.textContent = member["member-level"];
    level.classList.add("member-level");

    let span = document.createElement("span");
    span.textContent = " Member";
    span.classList.add("grid-only");
    level.appendChild(span);

    card.appendChild(level);
    
    // Address
    let address = document.createElement("p");
    if (member["address"] == "") {address.textContent = "7035 Southleg Ln.";}
    else                         {address.textContent = member["address"];}
    address.classList.add("address");
    address.classList.add("grid-only");
    card.appendChild(address);

    // Email
    let email = document.createElement("p");
    email.textContent = member["email"];
    email.classList.add("email");
    email.classList.add("grid-only");
    card.appendChild(email);

    // Phone
    let phone = document.createElement("p");
    if (member["phone"] == "") {phone.textContent = "+999-9999-9999";}
    else                       {phone.textContent = member["phone"];}
    phone.classList.add("phone");
    phone.classList.add("grid-only");
    card.appendChild(phone);

    // Website
    let website = document.createElement("a");
    website.textContent = "Website";
    website.classList.add("website");
    website.classList.add("grid-only");
    website.setAttribute("href", member["website"]);
    card.appendChild(website);

    // Contact Link
    let contact = document.createElement("a");
    contact.textContent = "Contact";
    contact.classList.add("contact");
    contact.classList.add("list-only");
    card.appendChild(contact);
    
    // Attach the card to the directory
    directory.appendChild(card);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const members = jsonObject['members'];
        members.forEach(displayMember);  
    });