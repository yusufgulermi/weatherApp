import React, { useEffect } from "react";
import styles from "./styles/Weather.module.css";

var firstDay = [];
var secondDay = [];
var thirdDay = [];
var fourthDay = [];
var fifthDay = [];
var allDay = [];
var counter = 0;
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function Weather({ weather }) {
  useEffect(() => {
    counter = 0;
    firstDay = [];
    secondDay = [];
    thirdDay = [];
    fourthDay = [];
    fifthDay = [];
    allDay.map((item, index) => {
      switch (item.weather[0].description) {
        case "broken clouds":
          document.getElementById(index).classList.add(styles.brokenclouds);
          break;
        case "overcast clouds":
          document.getElementById(index).classList.add(styles.clouds);
          break;
        case "light rain":
          document.getElementById(index).classList.add(styles.rainclouds);
          break;
        case "clear sky":
          document.getElementById(index).classList.add(styles.sun);
          break;
        case "scattered clouds":
          document.getElementById(index).classList.add(styles.brokenclouds);
          break;
        case "few clouds":
          document.getElementById(index).classList.add(styles.brokenclouds);
          break;
        case "moderate rain":
          document.getElementById(index).classList.add(styles.rain);
          break;
        case "heavy intensity rain":
          document.getElementById(index).classList.add(styles.intensityRain);
          break;
        default:
          break;
      }
      return null;
    });
    allDay = [];
  });

  weather.list.map((item) => {
    if (item.dt % 86400 === 0) {
      counter += 1;
    }
    switch (counter) {
      case 0:
        firstDay.push(item);
        allDay.push(item);
        break;
      case 1:
        secondDay.push(item);
        allDay.push(item);
        break;
      case 2:
        thirdDay.push(item);
        allDay.push(item);
        break;
      case 3:
        fourthDay.push(item);
        allDay.push(item);
        break;
      case 4:
        fifthDay.push(item);
        allDay.push(item);
        break;
      default:
        break;
    }
    return null;
  });

  var date = new Date(parseInt(firstDay[0].dt + "000"));
  var date2 = new Date(parseInt(secondDay[0].dt + "000"));
  var date3 = new Date(parseInt(thirdDay[0].dt + "000"));
  var date4 = new Date(parseInt(fourthDay[0].dt + "000"));
  var date5 = new Date(parseInt(fifthDay[0].dt + "000"));
  
  return (
    <div className={styles.container}>
      <div className={styles.weatherInfo}>
        <div className={styles.date}>
          <p>{weekday[date.getDay()]}</p>
          <p>{firstDay[0].dt_txt.split(" ")[0]}</p>
        </div>

        {firstDay.map((item, index) => (
          <div
            className={styles.eachWeatherInfo}
            id={index + 50}
            key={index}
            onClick={() =>
              document
                .getElementById(index + 50)
                .classList.toggle(styles.flipCard)
            }
          >
            <div className={styles.frontCard}>
              <span className={styles.image} id={index}></span>
              <p className={styles.temp}>{item.main.temp} &#8451;</p>
              <p className={styles.time}>
                {item.dt_txt.split(" ")[1].split(":")[0]}:00
              </p>
            </div>
            <div className={styles.backCard}>
              <span>
                <img src={require("./img/precipitation.png")} alt=""></img>
                <p>Precipitation: {Math.floor(item.pop * 100)}%</p>
              </span>
              <span>
                <img src={require("./img/humidity.png")} alt=""></img>
                <p>Humidity: {item.main.humidity}%</p>
              </span>
              <span>
                <img src={require("./img/wind.png")} alt=""></img>
                <p>
                  Wind Speed: {Math.floor((item.wind.speed * 3600) / 1000)}km/h
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.weatherInfo}>
        <div className={styles.date}>
          <p>{weekday[date2.getDay()]}</p>
          <p>{secondDay[0].dt_txt.split(" ")[0]}</p>
        </div>

        {secondDay.map((item, index) => (
          <div
            className={styles.eachWeatherInfo}
            id={index + 60}
            key={index}
            onClick={() =>
              document
                .getElementById(index + 60)
                .classList.toggle(styles.flipCard)
            }
          >
            <div className={styles.frontCard}>
              <span
                className={styles.image}
                id={index + firstDay.length}
              ></span>
              <p className={styles.temp}>{item.main.temp} &#8451;</p>
              <p className={styles.time}>
                {item.dt_txt.split(" ")[1].split(":")[0]}:00
              </p>
            </div>
            <div className={styles.backCard}>
              <span>
                <img src={require("./img/precipitation.png")} alt=""></img>
                <p>Precipitation: {Math.floor(item.pop * 100)}%</p>
              </span>
              <span>
                <img src={require("./img/humidity.png")} alt=""></img>
                <p>Humidity: {item.main.humidity}%</p>
              </span>
              <span>
                <img src={require("./img/wind.png")} alt=""></img>
                <p>
                  Wind Speed: {Math.floor((item.wind.speed * 3600) / 1000)}km/h
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.weatherInfo}>
        <div className={styles.date}>
          <p>{weekday[date3.getDay()]}</p>
          <p>{thirdDay[0].dt_txt.split(" ")[0]}</p>
        </div>

        {thirdDay.map((item, index) => (
          <div
            className={styles.eachWeatherInfo}
            id={index + 70}
            key={index}
            onClick={() =>
              document
                .getElementById(index + 70)
                .classList.toggle(styles.flipCard)
            }
          >
            <div className={styles.frontCard}>
              <span
                className={styles.image}
                id={index + firstDay.length + secondDay.length}
              ></span>
              <p className={styles.temp}>{item.main.temp} &#8451;</p>
              <p className={styles.time}>
                {item.dt_txt.split(" ")[1].split(":")[0]}:00
              </p>
            </div>
            <div className={styles.backCard}>
              <span>
                <img src={require("./img/precipitation.png")} alt=""></img>
                <p>Precipitation: {Math.floor(item.pop * 100)}%</p>
              </span>
              <span>
                <img src={require("./img/humidity.png")} alt=""></img>
                <p>Humidity: {item.main.humidity}%</p>
              </span>
              <span>
                <img src={require("./img/wind.png")} alt=""></img>
                <p>
                  Wind Speed: {Math.floor((item.wind.speed * 3600) / 1000)}km/h
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.weatherInfo}>
        <div className={styles.date}>
          <p>{weekday[date4.getDay()]}</p>
          <p>{fourthDay[0].dt_txt.split(" ")[0]}</p>
        </div>

        {fourthDay.map((item, index) => (
          <div
            className={styles.eachWeatherInfo}
            id={index + 80}
            key={index}
            onClick={() =>
              document
                .getElementById(index + 80)
                .classList.toggle(styles.flipCard)
            }
          >
            <div className={styles.frontCard}>
              <span
                className={styles.image}
                id={
                  index + firstDay.length + secondDay.length + thirdDay.length
                }
              ></span>
              <p className={styles.temp}>{item.main.temp} &#8451;</p>
              <p className={styles.time}>
                {item.dt_txt.split(" ")[1].split(":")[0]}:00
              </p>
            </div>
            <div className={styles.backCard}>
              <span>
                <img src={require("./img/precipitation.png")} alt=""></img>
                <p>Precipitation: {Math.floor(item.pop * 100)}%</p>
              </span>
              <span>
                <img src={require("./img/humidity.png")} alt=""></img>
                <p>Humidity: {item.main.humidity}%</p>
              </span>
              <span>
                <img src={require("./img/wind.png")} alt=""></img>
                <p>
                  Wind Speed: {Math.floor((item.wind.speed * 3600) / 1000)}km/h
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.weatherInfo}>
        <div className={styles.date}>
          <p>{weekday[date5.getDay()]}</p>
          <p>{fifthDay[0].dt_txt.split(" ")[0]}</p>
        </div>

        {fifthDay.map((item, index) => (
          <div
            className={styles.eachWeatherInfo}
            id={index + 90}
            key={index}
            onClick={() =>
              document
                .getElementById(index + 90)
                .classList.toggle(styles.flipCard)
            }
          >
            <div className={styles.frontCard}>
              <span
                className={styles.image}
                id={
                  index +
                  firstDay.length +
                  secondDay.length +
                  thirdDay.length +
                  fourthDay.length
                }
              ></span>
              <p className={styles.temp}>{item.main.temp} &#8451;</p>
              <p className={styles.time}>
                {item.dt_txt.split(" ")[1].split(":")[0]}:00
              </p>
            </div>
            <div className={styles.backCard}>
              <span>
                <img src={require("./img/precipitation.png")} alt=""></img>
                <p>Precipitation: {Math.floor(item.pop * 100)}%</p>
              </span>
              <span>
                <img src={require("./img/humidity.png")} alt=""></img>
                <p>Humidity: {item.main.humidity}%</p>
              </span>
              <span>
                <img src={require("./img/wind.png")} alt=""></img>
                <p>
                  Wind Speed: {Math.floor((item.wind.speed * 3600) / 1000)}km/h
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Weather);
