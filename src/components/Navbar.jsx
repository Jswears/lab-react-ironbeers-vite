import { Link } from "react-router-dom";
import HomeIcon from '../assets/home-icon.png';


const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={navStyle}>
                <Link className="navbar-brand" to="/"><img src={HomeIcon} alt="Home Icon"/></Link>
        </nav>
    );
}
 
export default Navbar;
