const fetch = require('node-fetch');

const url = 'https://covid-193.p.rapidapi.com/statistics?country=';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6c07c06cc2msh4595c9821306e85p112428jsn987f6711f317',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

fetch(`${url}mexico`, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));