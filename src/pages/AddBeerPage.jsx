import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirstBrewed] = useState('');
    const [brewers_tips, setBrewersTips] = useState('');
    const [attenuation_level, setAttenuationLevel] = useState(1);
    const [contributed_by, setContributedBy] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
        await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel(1);
        setContributedBy('');
        navigate(`/beers`);
    };

    return (
        <div className="container">
            <h1 className="mt-4">New Beer</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        className="form-control"
                        value={name}
                        name="name"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Tagline:</label>
                    <input
                        className="form-control"
                        value={tagline}
                        name="tagline"
                        type="text"
                        onChange={(event) => setTagline(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        className="form-control"
                        value={description}
                        name="description"
                        type="text"
                        onChange={(event) => setDescription(event.target.value)}
                        cols="30"
                        rows="5"
                    />
                </div>
                <div className="form-group">
                    <label>First Brewed:</label>
                    <input
                        className="form-control"
                        value={first_brewed}
                        name="first_brewed"
                        type="text"
                        onChange={(event) => setFirstBrewed(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Brewers Tips:</label>
                    <input
                        className="form-control"
                        value={brewers_tips}
                        name="brewers_tips"
                        type="text"
                        onChange={(event) => setBrewersTips(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Attenuation Level:</label>
                    <input
                        className="form-control"
                        value={attenuation_level}
                        name="attenuation_level"
                        type="number"
                        onChange={(event) => setAttenuationLevel(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Contributed By:</label>
                    <input
                        className="form-control"
                        value={contributed_by}
                        name="contributed_by"
                        type="text"
                        onChange={(event) => setContributedBy(event.target.value)}
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Create New Beer
                </button>
            </form>
        </div>
    );
}

export default AddBeerPage;
