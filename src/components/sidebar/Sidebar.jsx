import HomeIcon from "../../assets/icons/navigation/home.svg?react";
import FavoriteIcon from "../../assets/icons/navigation/favorite.svg?react";
import ListaIcon from "../../assets/icons/navigation/lista.svg?react";
import LogoutIcon from "../../assets/icons/actions/settings.svg?react";
import { Link } from "react-router-dom";

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sideClass">

      <Link to="/" className="sideItem">
        <HomeIcon className="icon" />
        <span>Home</span>
      </Link>
      <Link to="/Catalogo" className="sideItem">
        <ListaIcon className="icon" />
        <span>Catalogo</span>
      </Link>
      
      <Link to="/Favoritos" className="sideItem">
        <FavoriteIcon className="icon" />
        <span>Favoritos</span>
      </Link>

      <div></div>
      
<br />

        <Link className="sideItem">
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </Link>
      
    </aside>
  );
};
