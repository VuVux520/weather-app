import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [locationLabel,setLocationLabel] = useState([]);
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'f8380a9a12337a0ccff953df033ba08f',
    lat: lat,
    lon: long,
    locationLabel: locationLabel,
    lang: 'en',
    unit: 'metric',locationLabel
  });

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="App">
        <ReactWeather
          isLoading={isLoading}locationLabel
          locationLabel={locationLabel}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
    </div>
  );
}

export default App;
