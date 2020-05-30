//Estado da Aplicação(state)
let tabCountries = null;
let tabFavorites = null;
let allCountries = [];
let favoriteCountries = [];
let countCountries = 0;
let countFavorites = 0;
var totalPopulationList = 0;
let totalPopulationFavorites = 0;
let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');
  totalPopulationList = document.querySelector('#totalPopulationList');
  //prettier-ignore
  totalPopulationFavorites = document.querySelector('#totalPopulationFavor');
  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});
async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map((country) => {
    //destruction (evitar escrever muitas vezes a mesma coisa)
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.br,
      population: population,
      flag: flag,
    };
  });

  render();
}
function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleCoutryButtons();
}
function renderCountryList() {
  let countriesHTML = '<div id=countries-html>';
  allCountries.forEach((country) => {
    const { name, flag, id, population } = country;

    const countryHTML = `
    <div class='country'>
      <div>
        <a id="${id}" class="waves-effetc waves-light btn">+</a>
      </div>
      <div>
      <img src="${flag}" alt="${name}" class="bandeira">
     
      </div>
      <div>
      <ul>
      <li>${name}</li>
      <li>${population}</li>
      </ul>
      </div>
      
    </div> 

    `;
    countriesHTML += countryHTML;
  });

  countriesHTML += '</div>';
  tabCountries.innerHTML = countriesHTML;
  //tabCountries = allCountries; Fiz essa merda, não tava funcionando por causa disso
}
function renderFavorites() {
  let favoritesHTML = '<div>';
  favoriteCountries.forEach((country) => {
    const { name, flag, id, population } = country;
    const favoriteCountryHTML = `
    <div class='country'>
      <div>
        <a id="${id}" class="waves-effetc waves-dark btn">-</a>
      </div>
      <div>
      <img src="${flag}" alt="${name}" class="bandeira">
     
      </div>
      <div>
      <ul>
      <li>${name}</li>
      <li>${population}</li>
      </ul>
      </div>
      
    </div> 
`;
    favoritesHTML += favoriteCountryHTML;
  });
  favoritesHTML += '</div>';
  tabFavorites.innerHTML = favoritesHTML;
}
function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  totalPopulation = allCountries.reduce((pv, cv) => {
    return pv + cv.population;
  }, 0);
  totalPopulationList.textContent = totalPopulation;

  totalPopulationFavorites = favoriteCountries.reduce((pv, cv) => {
    return pv + cv.population;
  }, 0);
  totalPopulationFavor.textContent = totalPopulationFavorites;
}
//Erro, não consigo percorrer os CountryButtons
function handleCoutryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  console.log(countryButtons);
}
