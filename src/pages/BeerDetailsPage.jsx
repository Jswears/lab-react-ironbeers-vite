import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const [beerData, setBeerData] = useState(null);
    const { beerId } = useParams();

    const beerDetails = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
            const beerInfo = response.data;
            setBeerData(beerInfo);
        } catch (error) {
            console.log('There has been an error: ', error);
        }
    }

    useEffect(() => {
        beerDetails();
    }, [beerId]);

    return beerData ? (
        <div className="container mt-4">
            <img src={beerData.image_url} alt={beerData.title} className="img-fluid" style={{ height: "300px" }} />
            <h2>{beerData.name}</h2>
            <p>{beerData.tagline}</p>
            <p>First Brewed: {beerData.first_brewed}</p>
            <p>Attenuation Level: {beerData.attenuation_level}</p>
            <p>{beerData.description}</p>
            <p>Contributed by: {beerData.contributed_by}</p>
        </div>
    ) : 'Loading...';
}

export default BeerDetailsPage;
