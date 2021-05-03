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

export default function Weekly({ element }) {
  let weatherState;
  let weatherStateDesc;

  switch (element.weather_state_abbr) {
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
    case 'hr':
      weatherState = HeavyRain;
      weatherStateDesc = 'HeavyRain';
      break;
    case 'lr':
      weatherState = LightRain;
      weatherStateDesc = 'LightRain';
      break;
    case 's':
      weatherState = Shower;
      weatherStateDesc = 'Shower';
      break;
    case 'hc':
      weatherState = HeavyCloud;
      weatherStateDesc = 'HeavyCloud';
      break;
    case 'lc':
      weatherState = LightCloud;
      weatherStateDesc = 'LightCloud';
      break;
    default:
      weatherState = Clear;
      weatherStateDesc = 'Clear';
      break;
  }

  const { min_temp, max_temp, applicable_date } = element;

  return (
    <div className="flex flex-col bg-gray-800 w-80 md:w-full">
      <div className="w-full p-8">
        <p className="text-center text-white text-xl">
          {moment(applicable_date).format('dddd')}
        </p>
      </div>
      <div className="w-full m-auto pr-3">
        <img
          alt={weatherStateDesc}
          className="w-16 m-auto"
          src={weatherState}
        />
      </div>
      <div className="flex flex-row justify-around">
        <p className="text-center text-white text-xl py-12 md:py-8 font-sans">
          {parseInt(min_temp)}
          <span className="text">°C</span>
        </p>
        <p className="text-center text-white text-xl py-12 md:py-8 font-sans">
          {parseInt(max_temp)}
          <span className="text">°C</span>
        </p>
      </div>
    </div>
  );
}
