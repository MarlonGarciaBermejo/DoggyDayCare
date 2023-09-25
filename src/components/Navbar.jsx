import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./styles/Navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");

    };


    return(
      <header>
        <h3>DogDay<span className="spann">Care</span></h3>
        <nav ref={navRef}>  
            <a href="/#">Home</a>
            <a href="/#">Our dogs</a>
            <a href="/#">Info</a>
            <a href="/#">Contact</a>
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