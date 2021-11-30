import { Fragment } from 'react/cjs/react.production.min';


function Main({fetchedData, sevenDaysInfo}) {

    const sun = require('../static/images/sun.png')
    console.log(fetchedData);
        return(
            <Fragment>
                <div className="container-main"> 
                    <div className="imgHolder" >
                        <img className="sun" src={sun.default} alt="sun"/>
                    </div>
                    <div className="dataHolder">
                        <h2>Today</h2>
                        <h1>{fetchedData.name}</h1>
                        <p>Temperature: {fetchedData.main.temp}°C</p>
                        <p>{fetchedData.weather[0].main}</p>
                        <img className="weatherTypePic" src={`http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}.png`} alt={fetchedData.weather[0].main}/>
                    </div>
                </div>

                <div className="sevenDaysContainer">
                    {sevenDaysInfo.daily ? sevenDaysInfo.daily.map((day, index)=>{
                        if(index!==0){
                            const weekDay = new Date(day.dt * 1000).toLocaleString("en-us", {
                                weekday: "long"
                            });
                            return(
                                <div className="innerSeven"> 
                                    <h2>{weekDay}</h2>
                                    <h1>{day.name}</h1>
                                    <p>Day Temperature: {day.temp.day}°C</p>
                                    <p>Night Temperature: {day.temp.night}°C</p>
                                    <p>{day.weather[0].main}</p>
                                    <img className="weatherTypePic" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].main}/>
                                </div>
                            )   
                        }
                        else{
                            return null;
                        }
                       
                    }):null}
                </div>
            </Fragment>
        );
    
    }
export default Main;