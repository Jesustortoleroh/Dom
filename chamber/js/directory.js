
const requestFile = 'json/data.json';
let value = false
let website = ''

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    
    const directory = jsonObject['directory'];
    
    prepareDirectory()
    
    directory.forEach(displaydirectory);

  });




function displayCompanyWebsite(listing, value) {
    for  (const property in listing) {
        if (property == "website") {
            value = true
            website = document.createElement('a');
            website.setAttribute('href', `${listing.website}`)
            website.textContent = 'Website';
            return {website, value};
            }   
    };
    return {website, value};
}

function prepareDirectory(){
  let container = document.createElement('div');
  container.setAttribute('class', 'list')
  document.querySelector('div.directory').appendChild(container);

}

function displaydirectory(listing) {  // Create elements to add to the document
    let card = document.createElement('section');
    let image = document.createElement('img');
    let h3 = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = displayCompanyWebsite(listing, value)
    
      // Change the textContent property of the h2 element to contain the listing's full name
    h3.textContent = `${listing.name}`;
    address.textContent = `${listing.address}`;
    phone.textContent = `${listing.phone}`;
    image.setAttribute('src', listing.logo);
    // Add/append the section(card) with the h2 element
    card.appendChild(image);
    card.appendChild(h3);
    card.appendChild(address);
    card.appendChild(phone);

    if (website.value == true) {
        card.appendChild(website.website);
    }

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.list').appendChild(card);
  }

  let view

  function gridView() {
      view = document.getElementsByTagName('div');
      for (let i=0; i < view.length; i++) {
          view[i].className = view[i].className.replace("list", "grid");
          }    
      }
      
  function listView() {
      view = document.getElementsByTagName('div');    
      for (let i=0; i < view.length; i++) {
          view[i].className = view[i].className.replace("grid", "list");
          }
      }
  
  const gridBtn = document.getElementById("grid");
  gridBtn.onclick = gridView;
  
  const listBtn = document.getElementById("list");
  listBtn.onclick = listView;