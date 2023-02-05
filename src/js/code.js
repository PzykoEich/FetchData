import fetch from "node-fetch";
//const fetch = require('node-fetch');

const API = 'https://covid-193.p.rapidapi.com/statistics?country=';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6c07c06cc2msh4595c9821306e85p112428jsn987f6711f317',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

async function fetchData(urlAPI){
  const response = await fetch(urlAPI,options);
  const data = await response.json();
  return data;
}

(async () => {
  try{
    const pais = await fetchData(API+'mexico');

  }catch{

  }
})();

// inputs
const selectCountry = null || document.querySelector('.selectCountry');
const country = null || document.querySelector(".country");
const cases = null || document.querySelector('.cases');
const date = null || document.querySelector('.date');

//botones
const btnSelectCountry = null || document.querySelector('.btn-select-country');
const btnNew = null || document.querySelector('.sub-form');

btnSelectCountry.addEventListener('click', consulta);
btnNew.addEventListener('click', nuevo);
country.set




function consulta(){
    let countrys = selectCountry.value;
    console.log(countrys);
    let url = API + countrys
    fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
    console.log(countrys.trim());
}

function nuevo(){
    console.log('nuevo');
}