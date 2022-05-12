import React,{useState} from 'react'
import WeatherForm from './weatherForm';

const WeatherApp = () => {
    const [weather,setWeather] = useState(null);

    async function loadInfo(city = 'medellin'){
      try {
        const request = await fetch(
          `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q={city}`
          );
          const json = await request.json();

          console.log(json)
      } catch (error) {
        
      }
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