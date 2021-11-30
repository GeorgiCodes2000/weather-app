 import { useEffect, useState } from 'react';
 import './App.css';
import Main from './Components/Main';
import SearchBar from './Components/SearchBar';
  
function App() {

  const [fetchedData, setFetchedData] = useState({});
  const [sevenDaysInfo, setSevenDaysInfo] = useState({});
  const [input, setInput] = useState("");
 
  let currentWeahterApi =  `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=25e4b34663c5cb3797ec650ce85ccedd`;
  
  async function fetchDataWeather() {
    let data = await fetch(currentWeahterApi);
    let dataJson = await data.json();
    if(dataJson.coord){
      setFetchedData(dataJson);
        if(dataJson.coord){
          let sevenDaysApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${dataJson.coord.lat}&units=metric&lon=${dataJson.coord.lon}&appid=25e4b34663c5cb3797ec650ce85ccedd`;
          let dataTwo = await fetch(sevenDaysApi);
          let dataTwoJson = await dataTwo.json();
          if (dataTwoJson) setSevenDaysInfo(dataTwoJson);
        }
    }
  }

  const handleInput = (e)=>{
    e.preventDefault();
    setInput(e.target[0].value);
    e.target[0].value = "";
  }

  useEffect(()=>{
    fetchDataWeather();
  }, [input]);

  return (
    <div className="app">
        <SearchBar value={input} handleInput={handleInput}/>
        {fetchedData.coord ? <Main fetchedData={fetchedData} sevenDaysInfo={sevenDaysInfo}/>:null}
    </div>
  );
}

export default App;
