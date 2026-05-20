import HomeIcon from "../../assets/icons/navigation/home.svg?react";
import ExploreIcon from "../../assets/icons/navigation/explore.svg?react";
import FavoriteIcon from "../../assets/icons/navigation/favorite.svg?react";
import SettingsIcon from "../../assets/icons/actions/settings.svg?react";
import ListaIcon from "../../assets/icons/navigation/lista.svg?react";
import LogoutIcon from "../../assets/icons/actions/settings.svg?react";

import "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sideClass">
      <div className="sideItem">
        <HomeIcon className="icon" />
        <span>Home</span>
      </div>
      <div className="sideItem">
        <ExploreIcon className="icon" />
        <span>Busqueda</span>
      </div>
      <div className="sideItem">
        <FavoriteIcon className="icon" />
        <span>Favoritos</span>
      </div>
      <div className="sideItem">
        <ListaIcon className="icon" />
        <span>Catalogo</span>
      </div>

      <div className="sideDownItems">
        <div className="sideItem">
          <SettingsIcon className="icon" />
          <span>Settings</span>
        </div>
        <div className="sideItem">
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};
