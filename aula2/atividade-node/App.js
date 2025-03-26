import { OpenWeatherAPI } from "openweather-api-node";
import readline from "readline";
import dotenv from "dotenv/config";

const defaultLocation = "New York";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let weather = new OpenWeatherAPI({
    key: process.env.API_KEY,
    lang: "pt_br"
});

rl.question(`Escolha a unidade de medida (metric, imperial, standard): `, (unit) => {
    weather.setUnits(unit || "imperial");

    rl.question("Pesquisar Local: ", (setlocation) => {
        weather.setLocationByName(setlocation || defaultLocation);

        weather.getCurrent()
        .then((data) => {
            let unitSimbol = unit === "metric" ? "°C" : "°F";
            console.clear();
            console.log(`
                -------------------------------------------------------------
                | Localidade: ${setlocation || defaultLocation}
                | Temperatura atual: ${data.weather.temp.cur + unitSimbol}
                | Temperatura máxima: ${data.weather.temp.max + unitSimbol}
                | Temperatura mínima: ${data.weather.temp.min + unitSimbol}
                | Condição Climática: ${data.weather.description.slice(0, 1).toUpperCase() + data.weather.description.slice(1)}
                | Humidade: ${data.weather.humidity}%  
                | Sensação térmica: ${data.weather.feelsLike.cur + unitSimbol}
                | Chance de chuva: ${data.weather.rain}%
                | Velocidade do vento: ${data.weather.wind.speed} m/s S
                -------------------------------------------------------------
            `);
        }).catch((err) => {
            console.log(err);
        });
        rl.close();
    });
});