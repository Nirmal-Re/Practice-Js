'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderData = (data, className) => {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = countryName => {
//   const ajaxrequest = new XMLHttpRequest();
//   ajaxrequest.open('GET', `https://restcountries.com/v2/name/${countryName}`);
//   ajaxrequest.send();

//   ajaxrequest.addEventListener('load', () => {
//     const [data] = JSON.parse(ajaxrequest.responseText);
//     console.log(data);
//     renderData(data);
//     const neighbour = data.borders?.[0];
//     console.log(neighbour);

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', () => {
//       const data1 = JSON.parse(request2.responseText);
//       console.log(data1);
//       renderData(data1, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('united kingdom');

const getCountryData = country => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

getCountryData('nepal');
