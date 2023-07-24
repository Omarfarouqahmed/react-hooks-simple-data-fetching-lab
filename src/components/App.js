// create your App component here
import react, { useState, useEffect } from "react";

const App = ()=>{
    const [dogImage, setDogImage] = useState ('')
    const [isLoaded, setIsLoaded] = useState(false);

 useEffect(()=>{
    fetch ('https://dog.ceo/api/breeds/image/random')
    .then ((data)=> data.json())
    .then ((data) =>{
        setDogImage(data.message)
        setIsLoaded(true)
    })
 }, [])   
 return (
    <div>
       {isLoaded?
      ( <img src={dogImage} alt="A Random Dog"></img> ,
      <img src={dogImage} alt="A Random Dog"></img> ,
      <img src={dogImage} alt="A Random Dog"></img> ,
      <img src={dogImage} alt="A Random Dog"></img>  ) :
      (<p>Loading...</p>)
    } 
    </div>
 )
}
export default App