import { Link } from "react-router-dom"
import "./butCatalog.css";

export const ButCatalog = () => {
    return (
        <div>
            <Link to="/catalogo">
                <button className="btnPrimary">Ver Catálogo</button>
            </Link>

        </div>
    )
}
