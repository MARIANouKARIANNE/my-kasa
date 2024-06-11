import { Link } from "react-router-dom";
import "../../style/Error.scss"
function Error() {
    return (
      <div className="Container-Error">
      <><div>
        <h1 className="qcq"> 404
        </h1>
        <h2 className="Oups"> Oups! La page que vous demandez n'existe pas.</h2>
      </div><Link className="AAcceuilbis" to="/">Retourner sur la page d’accueil</Link></>
      </div>
    )
  }
  
  export default Error