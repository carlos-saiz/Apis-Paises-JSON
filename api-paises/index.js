const countriesApiUrl = 'https://restcountries.com/v3.1/all';
const countriesList = document.getElementById('countries-list');

async function fetchCountries() {
  try {
    const response = await fetch(countriesApiUrl);
    const countries = await response.json();

    countries.forEach(country => {
      const countryName = country.name.common;
      const flagUrl = country.flags.png;

      const countryItem = document.createElement('li');
      countryItem.innerHTML = `
        <img src="${flagUrl}" alt="${countryName} Flag">
        ${countryName}
      `;

      countriesList.appendChild(countryItem);
    });
  } catch (error) {
    console.error('Error al obtener los países:', error);
  }
}

fetchCountries();
