import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    const fetchingData = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            const beersData = response.data;
            setBeers(beersData);
            console.log(response.data);
        } catch (error) {
            console.log('Error while fetching information: ', error);
        }
    }

    useEffect(() => {
        fetchingData();
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4">All beers page</h1>
            {beers.map((beer) => (
                <div key={beer._id} className="mb-4 pb-4 border-bottom">
                    <img src={beer.image_url} alt={beer.name} style={{ height: "300px" }} />
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`} className="btn btn-primary">Check details!</Link>
                </div>
            ))}
        </div>
    );
}

export default AllBeersPage;
