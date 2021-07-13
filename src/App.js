import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const { data, errorMessage } = useOpenWeather({
  //   key: 'f8380a9a12337a0ccff953df033ba08f',
  //   lat: lat,
  //   lon: long,
  //   lang: 'en',
  //   unit: 'metric',
  // });

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="App">
        <ReactWeather
          isLoading={isLoading}
          data={data}
          lang="en"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
    </div>
  );
}

export default App;
