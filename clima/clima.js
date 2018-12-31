//api.openweathermap.org/data/2.5/weather?lat=35&lon=139
const axios = require('axios');
const lugar = require('../lugar/lugar');

const getClima = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ee9b0bd74959487ef12df072d277d326&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}