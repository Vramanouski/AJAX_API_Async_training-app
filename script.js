"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const displayError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
};

// // GPS function

// // const displayCountryByGPS = function (lat, lng) {
// //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //     .then((response) => {
// //       if (!response.ok)
// //         throw new Error(
// //           `Проблема с геокодированием (ошибка ${response.status})`
// //         );
// //       return response.json();
// //     })
// //     .then((data) => {
// //       console.log(data);
// //       console.log(`You are in ${data.city}, ${data.country}`);
// //       return getDataAndConvertToJSON(
// //         `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
// //         "Страна не найдена."
// //       );
// //     })
// //     .then((data) => displayCountry(data[0]))
// //     .catch((e) => {
// //       console.error(`${e} 🧐`);
// //       displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     })

// //     .catch((e) => console.error(`${e.message} 🧐`));
// // };

// // displayCountryByGPS(35.756, 139.256);
// // displayCountryByGPS(48.857, 2.358);
// // displayCountryByGPS(40.708, -74.051);

// //////////////////////////////////////////////////////

// // const getCountryData = function (countryName) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

// //   const data = request.send();
// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);

// //     const currencies = data.currencies;
// //     const currencyName = Object.values(currencies)[0].name;
// //     const currencySymbol = Object.values(currencies)[0].symbol;

// //     const languages = data.languages;
// //     const firstLanguage = Object.values(languages)[0];

// //     const html = `
// //   <article class="country">
// //   <img class="country__img" src="${data.flags.svg}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name.common}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
// //       +data.population / 1000000
// //     ).toFixed(1)} mln</p>
// //     <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
// //     <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
// //   </div>
// // </article>`;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // const getCountryAndBorderCountries = function (countryName) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

// //   const data = request.send();
// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);

// //     displayCountry(data);

// //     const [firstNeighbour] = data.borders;
// //     if (!firstNeighbour) return;

// //     // AJAX for neighbour
// //     const request2 = new XMLHttpRequest();
// //     request2.open(
// //       'GET',
// //       `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
// //     );

// //     request2.send();
// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);
// //       displayCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryAndBorderCountries('Germany');

// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

// //   const data = request.send();

// const getDataAndConvertToJSON = function (
//   url,
//   errorMessage = "Something went wrong"
// ) {
//   return fetch(url).then((response) => {
//     if (!response.ok)
//       throw new Error(`Country does not exist. Code: ${response.status}`);
//     return response.json();
//   });
// };
// const getCountryData = function (countryName) {
//   getDataAndConvertToJSON(
//     `https://restcountries.com/v3.1/name/${countryName}`,
//     "Country does not exist"
//   )
//     .then((data) => {
//       displayCountry(data[0]);
//       if (!data[0].borders) throw new Error("No neighbours");
//       const firstNeighbour = data[0].borders[0];

//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/name/${firstNeighbour}`,
//         "Country does not exist"
//       );
//     })
//     .then((data) => displayCountry(data[0], "neighbour"))
//     .catch((e) => {
//       console.log(e);
//       displayError(`Error Code: ${e.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

btn.addEventListener("click", function () {
  getCountryData("sweden");
});

// // const lotteryPromise = new Promise(function (resolve, reject) {
// //   console.log("The lottery is starting...");
// //   setTimeout(function () {
// //     if (Math.random() >= 0.5) {
// //       resolve("you won");
// //     } else {
// //       reject(new Error("you lose"));
// //     }
// //   }, 4000);
// // });

// // lotteryPromise
// //   .then((res) => console.log(res))
// //   .catch((err) => console.error(err));

// // getUserPosition()
// //   .then((pos) => console.log(pos))
// //   .catch((e) => console.log(e));

// const displayUserCountry = function () {
//   getUserPosition()
//     .then((pos) => {
//       const { latutude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(
//           `Проблема с геокодированием (ошибка ${response.status})`
//         );
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/name/${data.country}`,
//         "Страна не найдена."
//       );
//     })
//     .then((data) => displayCountry(data[0]))
//     .catch((e) => {
//       console.error(`${e} 🧐`);
//       displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })

//     .catch((e) => console.error(`${e.message} 🧐`));
// };

// displayUserCountry();

const getUserPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getCountryData = async function () {
  const UserPosition = await getUserPosition();
  const { latitude: lat, longitude: lng } = UserPosition.coords;
  const geocodingResponse = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json`
  );
  const geocodingData = await geocodingResponse.json();
  console.log(geocodingData);
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${geocodingData.country}`
  );
  const data = await response.json();
  console.log(data);
  displayCountry(data[0]);
};

getCountryData();

const displayCountry = function (data, className = "") {
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

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
