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
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
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

const getJSON = (url, errMsg = 'Something Went Wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = country => {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found')
    .then(data => {
      renderData(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('Country Not Found');
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country Not Found'
      );
    })
    .then(data => {
      renderData(data, 'neighbour');
    })
    .catch(err => {
      console.log(err, `✖️✖️✖️✖️✖️`);
      renderError(`Your went wrong. ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', e => {
  e.preventDefault();
  getCountryData('Australia');
});
