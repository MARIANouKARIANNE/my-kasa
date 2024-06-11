import "../../style/Footer.scss";
import LOGObissmallWhite from "../../assets/LOGOsmallWhitebis.png";

function Footer() {
  return (
    <footer>
    <div className="container-footer">
    <img src={LOGObissmallWhite} alt="LOGObis de Kasa" className="KasaLOGObissmallWhite"></img>
    <p>© 2020 Kasa. All rights reserved</p>
    </div>
  </footer>
  );
}

export default Footer;