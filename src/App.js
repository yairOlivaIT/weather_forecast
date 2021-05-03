import React, { useEffect, useState } from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  const [weather, setWeather] = useState([]);

  function fetchLocalWeather() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latt = position.coords.latitude;
      const long = position.coords.longitude;
      let localWOEID;

      fetch(
        `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          localWOEID = data[0].woeid;
          fetch(
            `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${localWOEID}/`
          )
            .then((response) => response.json())
            .then((data) => setWeather(data));
        });
    });
  }

  useEffect(() => {
    fetchLocalWeather();
  }, []);

  return (
    <div className="md:flex min-h-screen md:align-top bg-gray-800 min-h-100">
      {weather.length === 0 ? (
        <p className="m-auto p-20 text-xl text-white">
          This application works with the location, please activate and reload
          the page
        </p>
      ) : (
        <>
          <Sidebar
            // fetchLocalWeather = {fetchLocalWeather}
            weather={weather}
          />
          <MainContent weather={weather} />
        </>
      )}
    </div>
  );
}

export default App;
