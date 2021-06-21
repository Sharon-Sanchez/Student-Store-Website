import './Navbar.css'
import { Link } from "react-router-dom"


function Navbar () {
    return (
        <div className="Navbar">
            <div className="wrapper">
                <ul className="links">
                    <li><Link to="/#" >Home</Link></li>
                    <li><Link to="/#">About Us</Link></li>
                    <li><Link to="/#">Contact Us</Link></li>
                    <li><Link to="/#">Buy Now</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;