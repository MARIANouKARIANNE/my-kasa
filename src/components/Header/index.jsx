import { Link } from "react-router-dom";
import "../../style/Banner.scss";
import LOGObis from "../../assets/LOGObis.png";

function Header() {
  return (
    <div className="Header">
      
      <img src={LOGObis} alt="LOGObis de Kasa" className="KasaLOGObis"></img>
      <div className="NavLinks">
      <nav >
        <Link className="AAcceuil" to="/">Accueil</Link>

        <Link to="/APropos">à Propos </Link>
      </nav>
    </div>
    </div>
  );
}

export default Header;