import Beers from '../assets/beers.png';
import RandomBeer from '../assets/random-beer.png';
import NewBeer from '../assets/new-beer.png';

import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <img src={Beers} alt="All Beers" style={{width:"100%", height:"200px"}} />
            <h3>
                <Link to={'/beers'}>All Beers</Link>
            </h3>
            <img src={RandomBeer} alt="Random Beer" style={{width:"100%", height:"200px"}} />
            <h3>
                <Link to={'/random-beer'}>Random Beer</Link>
            </h3>
            <img src={NewBeer} alt="New Beer" style={{width:"100%", height:"200px"}} />
            <h3>
                <Link to={'/new-beer'}>Add a Beer</Link>
            </h3>
        </div>
    );
}

export default HomePage;
