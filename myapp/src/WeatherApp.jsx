import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import{useState} from 'react';
function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"delhi",
        discription: "haze",
        feelsLike: 26.05, 
        humidity: 34,
        temp: 26.05,
        tempMax: 26.05,
        tempMin: 26.0,
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app </h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>

        </div>

    )
}
export default WeatherApp;