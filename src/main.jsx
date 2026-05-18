import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{background:"#050505",color:"white",fontFamily:"Arial",padding:"20px"}}>
      <h1 style={{color:"#ff6a00"}}>HELIALTITUDE SIMULATION</h1>

      <section>
        <h2>VIVEZ L'EXPÉRIENCE DU PILOTAGE HÉLICOPTÈRE</h2>
        <p>Photo héro : remplacez par votre image principale validée</p>
      </section>

      <hr/>

      <section>
        <h2 style={{color:"#ff6a00"}}>LE SIMULATEUR ALOUETTE II</h2>
        <p>Immersion réaliste - scénarios variés - partout en France</p>
      </section>

      <hr/>

      <section>
        <h2>POUR QUI ?</h2>
        <div>
          <h3>Grand Public</h3>
          <p>Une seule photo à intégrer</p>

          <h3>Entreprises & Team Building</h3>
          <p>Photo cockpit intérieur fournie</p>

          <h3>Salons & Événements</h3>
          <p>Conserver l'image actuelle</p>
        </div>
      </section>

      <hr/>
      <footer>
        <p>06 31 82 84 88</p>
        <p>contact@ha-simulation.fr</p>
        <p>heli-altitudesimulation.fr</p>
        <p>Tarifs et prestations sur devis</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
