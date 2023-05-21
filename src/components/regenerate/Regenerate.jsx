import React, { useState, useEffect } from "react";
import "./Regenerate.css";

const Regenerate = () => {
  const [switchPressed, setSwitchPressed] = useState(false);

  const switchRotater = (switchPressed) => {
    if (switchPressed) {
      return { transform: "rotate(180deg)" };
    }
  };

  const videoToggler = (switchPressed) => {
    if (switchPressed) {
      return { display: "flex", opacity: "1" };
    }
  };

  return (
    <section id="regenerate" className="regenerate-wrapper">
      <div className="paddings innerWidth regenerate-container">
        <div className="flexColStart regenerate-head">
          <span className="lightRedText">Conheça nossa mais</span>
          <span>nova linha de produtos do grupo</span>
          <span className="lightRedText">Umbrella Pharmaceutical Inc.</span>
        </div>
      </div>
      <div className="flexColStart paddings innerWidth commercial-container">
        <span className="whiteText">
          O envelhecimento corporal é um processo biológico inevitável. Apenas
          para quem não conhece o{" "}
          <span className="lightRedText"> Regenerate®</span>.
        </span>
        <span className="whiteText">
          {" "}
          Este será o primeiro produto farmacêutico do mundo{" "}
          <span className="lightRedText">
            capaz de reescrever o DNA do cliente.
          </span>
          , garantindo um rejuvenescimento celular permanente.
        </span>
        <div className="umbrella-switch-container">
          <span>Clique no botão abaixo para saber mais</span>
          <img
            style={switchRotater(switchPressed)}
            onClick={() => setSwitchPressed((prev) => !prev)}
            className="umbrella-switch"
            src="./umbrella-switch.png"
            alt=""
          />
        </div>
        <div
          style={videoToggler(switchPressed)}
          className="video-container flexCenter"
        >
          <span>
            * Acessibilidade: ative as legendas do vídeo no botão CC.{" "}
          </span>
          <iframe
            className="commercial-video"
            width="80%"
            height="600rem"
            controls
            src="https://www.youtube.com/embed/OP2_6dIXoKU"
            autoplay
            poster="imagemprevia.jpg"
          >
            Desculpa, o seu navegador não suporta vídeos incorporados, mas você
            pode <a href="videofile.ogg">baixá-lo</a>e assistir pelo seu
            reprodutor de mídia favorito!
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Regenerate;
