import { Link } from "react-router-dom";
import "./butLogin.css";

export const ButLogin = () => {
  return (
    <div>
      <Link to="/login">
        <button className="btnSecondary">Iniciar Sesión</button>
      </Link>
    </div>
  );
};
