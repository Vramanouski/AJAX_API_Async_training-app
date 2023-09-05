'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////////////

// const getCountryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

//   const data = request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     const currencies = data.currencies;
//     const currencyName = Object.values(currencies)[0].name;
//     const currencySymbol = Object.values(currencies)[0].symbol;

//     const languages = data.languages;
//     const firstLanguage = Object.values(languages)[0];

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} mln</p>
//     <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
//     <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
//   </div>
// </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const displayCountry = function (data, className = '') {
  const currencies = data.currencies;
  const currencyName = Object.values(currencies)[0].name;
  const currencySymbol = Object.values(currencies)[0].symbol;

  const languages = data.languages;
  const firstLanguage = Object.values(languages)[0];

  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
      +data.population / 1000000
    ).toFixed(1)} mln</p>
    <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
    <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndBorderCountries = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

//   const data = request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     displayCountry(data);

//     const [firstNeighbour] = data.borders;
//     if (!firstNeighbour) return;

//     // AJAX for neighbour
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
//     );

//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       displayCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndBorderCountries('Germany');

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

//   const data = request.send();

const getCountryData = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
      displayCountry(data[0]);
      const firstNeighbour = data[0].borders[0];
      if (!firstNeighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
    })
    .then(response => response.json())
    .then(data => displayCountry(data[0], 'neighbour'));
};

getCountryData('sweden');
