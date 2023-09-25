import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");

    };
    
    return(
      <header>
        <h3>DogDay<span className="spann">Care</span></h3>
        <nav ref={navRef}>  
            <Link to="/#">Home</Link>
            <Link to="/components/Catalog">Our dogs</Link>
        
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn"  onClick={showNavBar}>
            <FaBars/>
        </button>


      </header>
    );
}

export default Navbar;