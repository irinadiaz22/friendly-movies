import HomeIcon from "../../assets/icons/navigation/home.svg?react";
import ListaIcon from "../../assets/icons/navigation/lista.svg?react";
import FavoriteIcon from "../../assets/icons/navigation/favorite.svg?react";
import LogoutIcon from "../../assets/icons/navigation/logout.svg?react"

import "./footer.css";

export const Footer = () => {
  return (
    <div className="footerClass">
      <div className="sideItem">
        <HomeIcon className="icon" />
        <span>Home</span>
      </div>

      <div className="sideItem">
        <FavoriteIcon className="icon" />
        <span>Favoritos</span>
      </div>
      <div className="sideItem">
        <ListaIcon className="icon" />
        <span>Catalogo</span>
      </div>

      <div className="sideItem">
        <LogoutIcon className="icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};
