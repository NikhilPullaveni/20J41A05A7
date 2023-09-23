const request = require('request');

const options = {
  method: 'GET',
  url: 'https://train.p.rapidapi.com/api/v2/getFare',
  qs: {
    trainNo: '19038',
    fromStationCode: 'ST',
    toStationCode: 'BVI'
  },
  headers: {
    'X-RapidAPI-Key': '39ad8d44f2mshffb6855e3cadf8cp14ac77jsn1a867e54e642',
    'X-RapidAPI-Host': 'train.p.rapidapi.com'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});