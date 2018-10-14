const axios = require("axios");

const getLugarLatLng = async(direccion) => {

    let encoded = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=AIzaSyBGm9cDfcED_F3nFA2nPGdItomBN9bGTUE`);

    if (respuesta.data.status === "ZERO_RESULTS") {
        throw Error(`No hay resultados para el lugar: ${direccion}`);
    }

    let data = respuesta.data;
    let location = data.results[0];
    let dir = location.formatted_address;
    let lat = location.geometry.location.lat;
    let lng = location.geometry.location.lng;

    return {
        direccion: dir,
        lat: lat,
        lng: lng
    }
};

module.exports = {
    getLugarLatLng
};