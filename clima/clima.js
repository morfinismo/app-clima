var axios = require("axios");

const getclima = async(lat, lng) => {
    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0edf8bc60694809ca6e402b20ada0d30`);
    return respuesta.data.main.temp;
};

module.exports = {
    getclima
}