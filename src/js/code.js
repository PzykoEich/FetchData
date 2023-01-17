//
const fetch = require('node-fetch');

const url = 'https://covid-193.p.rapidapi.com/statistics?country=';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6c07c06cc2msh4595c9821306e85p112428jsn987f6711f317',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};



// inputs
const selectCountry = document.querySelector('.selectCountry');
const country = document.querySelector(".country");
const cases = document.querySelector('.cases');
const date = document.querySelector('.date');

//botones
const btnSelectCountry = document.querySelector('.btn-select-country');
const btnNew = document.querySelector('.sub-form');

btnSelectCountry.addEventListener('click', consulta);
btnNew.addEventListener('click', nuevo);
country.set




function consulta(){
    let countrys = selectCountry.value;
    url = url + countrys
    fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
    console.log(countrys.trim());
}

function nuevo(){
    console.log('nuevo');
}