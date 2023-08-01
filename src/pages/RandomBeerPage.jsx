import axios from "axios";
import { useEffect, useState } from "react";


function RandomBeersPage() {

const [beerData, setBeerData] = useState(null);

const beerDetails = async () => {
    try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        const beerInfo = response.data;
        setBeerData(beerInfo);
    } catch (error) {
        console.log('There has been an error: ', error)
    }
}

console.log('beer: ', beerData)
useEffect(() => {
    beerDetails()
}, [])

const containerStyle = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

return beerData ? (
     <div style={containerStyle}>
        <h1 className="mt-4">Random Beer!</h1>
        <img src={beerData.image_url} alt={beerData.title} style={{height:"300px"}} />
        <h2>{beerData.name}</h2>
        <p>{beerData.tagline}</p>
        <p>{beerData.first_brewed}</p>
        <p>{beerData.attenuation_level}</p>
        <p>{beerData.description}</p>
        <p>{beerData.contributed_by}</p>
     </div>
    ) : 'Loading...'

}

export default RandomBeersPage;
