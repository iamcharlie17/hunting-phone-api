
//load phone data---
const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
}


const phoneContainer = document.getElementById('phone-container');
// phoneContainer.textContent = '';


//display phones
const displayPhones = phones => {
  
  phones.forEach(phone => {
    console.log(phone);
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-gray-200 shadow-xl `;
    phoneCard.innerHTML = `
       <figure class="px-10 pt-10">
            <img src=${phone.image} alt="Phones" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <h2 class="phone-price text-2xl font-bold">999$</h2>
            <div class="card-actions">
              <button class="btn btn-primary">Show Details</button>
            </div>
    `;
    phoneContainer.appendChild(phoneCard);
  })
}

//handle search button---
const handleSearch = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
  phoneContainer.textContent = '';
}

