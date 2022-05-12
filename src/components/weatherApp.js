import React,{useState} from 'react'
import WeatherForm from './weatherForm';

const WeatherApp = () => {
    const [weather,setWeather] = useState(null);

    async function loadInfo(city = 'medellin'){

    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

  return (
    <div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <div>Info</div>
    </div>
  )
}

export default WeatherApp