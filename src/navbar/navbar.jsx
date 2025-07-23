import { Link } from "react-router-dom";
import "./styles.css";
import img from "../images/logo1.jpg";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={img} alt="Hotel Heaven Logo" width="100" height="50" />
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link>
        <Link to="/register"></Link>
      </div>
     
    </nav>
  );
};

export default Navbar;
