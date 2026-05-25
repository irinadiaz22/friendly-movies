import Logo from "../../assets/img/Logo.png"
import { Link } from "react-router-dom";
import PersonIcon from "../../assets/icons/navigation/person.svg?react"
import "./navBar.css"

export const NavBar = () => {
  return (
    <nav>
      <img src= { Logo } alt="Movies" className="logoImg"/>
      <h1 className="navTitle">FriendlyMovies</h1>
      <div>
        <ul className="navLiks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Catalogo">Catalogo</Link>
          </li>
          <li>
            <Link to="/">Busqueda</Link>
          </li>
            
          

        </ul>
      </div>
                      
      <div className="login">
        <PersonIcon className="icon" />
        <Link to="/">Login</Link>
      </div>
    </nav>
  );
};
