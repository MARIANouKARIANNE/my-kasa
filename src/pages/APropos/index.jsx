import {Collapse} from "../../components/Collapse"
import IMGFondbis from "../../assets/IMGFondbis.png";


function APropos() {
    return (
      <><div> <img className="IMGFondbis
      " src={IMGFondbis} alt="paysage" /></div><div className="CollapseContainer">

        <Collapse
          textWhenCollapsed="Fiabilité"
          textWhenExpanded="Les annones postées sur kasa garantissent une fiabilité totale.Les photos sont conforme aux logements, et toutes les informations sont régulièrement vérifiés par nos équipes"
        >
         
        </Collapse>
        <Collapse
          textWhenCollapsed="Respect"
          textWhenExpanded="La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de note plateforme."
        >
         
        </Collapse>
        <Collapse
          textWhenCollapsed="Service"
          textWhenExpanded=" La bienveillance fait partie des valeurs  fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de note plateforme. "
        >
         
        </Collapse>
        <Collapse
          textWhenCollapsed="Sécurité"
          textWhenExpanded= " La sécurité est une priorité de Kasa , Aussi bien pour nos hotes que pour les voyageurs , chaque logement correspond aux critères de sécurité établis par nos services. En laissans une note aussi bien a l'hote qu'au locataire.cela permet à nos équipes de vérrifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique.</p>"
        >
        
        </Collapse>
      </div></>
  );
}
  export default APropos