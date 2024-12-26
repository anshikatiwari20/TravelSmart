import './Navbar.css'
import { Link } from "react-router-dom"

export const Navbar = () => {
  

  return (
    <nav>
      <div className="logo">
        <Link to="/"><span>T</span>ravel <span>S</span>mart</Link>
      </div>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>

      <ul className="list">
        <li id="active"><Link to="/">Home</Link></li>
        <li><Link to="/book" id="d">Book</Link></li>
        <li><Link to="/locations" id="d">Locations</Link></li>
        <li><Link to="/contact" id="d">Contact Us</Link></li>
      </ul>
    </nav>
  )
}