import moment from 'moment';
import React from 'react';
import Clear from '../pics/Clear.png';
import Hail from '../pics/Hail.png';
import HeavyCloud from '../pics/HeavyCloud.png';
import HeavyRain from '../pics/HeavyRain.png';
import LightCloud from '../pics/LightCloud.png';
import LightRain from '../pics/LightRain.png';
import Shower from '../pics/Shower.png';
import Sleet from '../pics/Sleet.png';
import Snow from '../pics/Snow.png';
import Thunderstorm from '../pics/Thunderstorm.png';

export default function Sidebar({ weather }) {
  const { title, parent, consolidated_weather } = weather;

  let weatherState;
  let weatherStateDesc;

  switch (consolidated_weather.weather_state_abbr) {
    case 'sn':
      weatherState = Snow;
      weatherStateDesc = 'Snow';
      break;
    case 'sl':
      weatherState = Sleet;
      weatherStateDesc = 'Sleet';
      break;
    case 'h':
      weatherState = Hail;
      weatherStateDesc = 'Hail';
      break;
    case 't':
      weatherState = Thunderstorm;
      weatherStateDesc = 'Thunderstorm';
      break;
    case 'c':
      weatherState = Clear;
      weatherStateDesc = 'Clear';
      break;
    case 'lr':
      weatherState = LightRain;
      weatherStateDesc = 'Light Rain';
      break;
    case 's':
      weatherState = Shower;
      weatherStateDesc = 'Shower';
      break;
    case 'hc':
      weatherState = HeavyCloud;
      weatherStateDesc = 'Heavy Cloud';
      break;
    case 'lc':
      weatherState = LightCloud;
      weatherStateDesc = 'Light Cloud';
      break;
    default:
      weatherState = HeavyRain;
      weatherStateDesc = 'Heavy Rain';
      break;
  }

  return (
    <aside className="md:w-3/5 lg:w-2/5 xl:w-2/6 bg-teal-600 px-5 py-10">
      <div className="m-auto w-full h-40">
        <div className="flex flex-col">
          <div className="flex flex-row m-auto">
            <svg
              className="w-8 h-8 m-auto text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                fillRule="evenodd"
              />
            </svg>
            <p className="text-lg text-center p-4  text-white">
              {title} - {parent.title}
            </p>
          </div>
          <p className="text-lg text-center p-4 text-white">
            {moment(consolidated_weather[0].applicable_date).format('LL')}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full  m-auto pr-8">
          <img
            alt={weatherStateDesc}
            className="w-50 m-auto"
            src={weatherState}
          />
        </div>

        <div className="m-auto w-full h-40">
          <p className="text-8xl text-center p-8 text-white font-sans">
            {parseInt(consolidated_weather[0].the_temp)}
            <span className="text-6xl text">°C</span>
          </p>
        </div>
        <div className="m-auto w-full">
          <p className="text-4xl text-center p-8 text-white">
            {weatherStateDesc}
          </p>
        </div>
      </div>
    </aside>
  );
}
