const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=ac3d217cb982ce66d9410828661f7fbf&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});