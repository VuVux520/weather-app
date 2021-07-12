import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';

function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'f8380a9a12337a0ccff953df033ba08f',
    lat: '16.047079',
    lon: '108.206230',
    lang: 'en',
    unit: 'metric',
  });
  return (
    <div className="App">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Đà Nẵng"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}

export default App;
