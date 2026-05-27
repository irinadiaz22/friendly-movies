import HomeIcon from "../../assets/icons/navigation/home.svg?react";
import ExploreIcon from "../../assets/icons/navigation/explore.svg?react";
import FavoriteIcon from "../../assets/icons/navigation/favorite.svg?react";
import SettingsIcon from "../../assets/icons/actions/settings.svg?react";
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
   
      <Link className="sideItem">
        <ExploreIcon className="icon" />
        <span>Busqueda</span>
      </Link>
      <Link className="sideItem">
        <FavoriteIcon className="icon" />
        <span>Favoritos</span>
      </Link>
      
      <div></div>
      
        <Link className="sideItem">
          <SettingsIcon className="icon" />
          <span>Settings</span>
        </Link>
        <Link className="sideItem">
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </Link>
      
    </aside>
  );
};
