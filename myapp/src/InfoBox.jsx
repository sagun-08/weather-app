import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import Typography from '@mui/material/Typography';

function InfoBox({info}){
    
    
    const HOT_URL="https://cardinalwxservice.com/wp-content/uploads/2019/09/Fall-1.jpg"
    const COLD_URL="https://tse4.mm.bing.net/th?id=OIP.G4Ir6mw-mZNj4GeNZqonKgHaEK&pid=Api&P=0&h=220"
    const RAIN_URL="https://tse4.mm.bing.net/th?id=OIP.HtAsF9LBw_XI_CsjtFKizAHaEk&pid=Api&P=0&h=220"
    return(
<div className="InfoBox">
    <div className='cardContainer'>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        {info.humidity>80? RAIN_URL :info.temp>15 ? HOT_URL:COLD_URL}       
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component={"span"}>
          {info.city} {info.humidity>80? <ThunderstormIcon/> :info.temp>15 ? <WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>Temprature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}</p>
         <p>Max Temp={info.tempMax}</p>
         <p>The weather can be described as <b>{info.discription}</b> feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
</div>
    )
       
}
export default InfoBox;