import React, { useEffect, useState } from 'react';
import MyKey from './key'

function App() {
  const [AnimalName ,setAnimalName]=useState("")
 const [top_speed, setTopSpeed] =useState("")
 const [locations, setLocations]=useState("")
  const [animal, setAnimal]= useState("")

  const fetchAnimal =async ()=>{

    try{
      // let Dataname = "Monkey";
      let Dataname = AnimalName;
      const response = await fetch(

      `https://api.api-ninjas.com/v1/animals?name=${Dataname}`,

        {
          headers: {
          'X-Api-Key': MyKey
          }
        }
      );
      const data = await response.json();
      console.log(await data);
      const [{name ,characteristics:{top_speed},locations:[first_location]}]=data;
      setAnimalName(name)
      setTopSpeed(top_speed)
      setLocations(first_location);
      console.log(first_location);
    }
    catch(error){
      console.log("error fetching weather data", error);
    }
  }
  // useEffect(()=>{
  //   fetchAnimal();

  // },[]
// )


  const SearchAnimal = (e)=>{
    e.preventDefault();
    fetchAnimal();
  }
  const HandleChange=(e)=>{
    // console.log(e.target.value)
    setAnimalName(e.target.value)
    // setAnimal(e.target.value);
  }
  
  return (
   <>
  
    
     <h1>Animal Data</h1>
  
      
      <input type="text" value={AnimalName} onChange={HandleChange}/><br/>
      <button onClick={SearchAnimal}>Search</button>
   
      <h4>{AnimalName}</h4>
      <h4>{top_speed}</h4>
      <h4>{locations}</h4>
  
   </>
  );
}

export default App;
