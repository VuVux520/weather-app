import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const { data, isLoading, errorMessage } = useOpenWeather({
    lat: 16.047079,
    lon: 108.206230,
    lang: 'en',
    unit: 'metric',
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
          isLoading={isLoading}
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
