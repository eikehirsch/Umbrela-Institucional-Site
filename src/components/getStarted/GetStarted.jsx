import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section id="launch" className="getStarted-wrapper">
      <div className="paddings innerWidth getStarted-container">
        <div className="flexColCenter inner-container">
          <span>Contribua com o lançamento do Regenerate®!</span>
          <span>
            A{" "}
            <span className="darkRedText spanStarted">
              etapa final do desenvolvimento do Regenerate®
            </span>{" "}
            é o que nos separa de liberarmos ao público nosso mais estimado
            produto.
          </span>
          <span>
            A{" "}
            <span className="darkRedText spanStarted">
              Umbrella Corporation escolherá felizardos
            </span>{" "}
            para ter a honra de participar dessa reta final.
          </span>
          <span>
            Gostaria de ter seu nome gravado eternamente na história da medicina
            moderna?
          </span>
          <button className="button">
            <a href="mailto:umbrella_selecao_tvirus@umbrella.com">
              Participar da seleção
            </a>
          </button>
        </div>

        <div className="flexColCenter regenerate-image-container">
          <img className="regenerate-image" src="./regenerate.jpg" alt="" />
          <span className="regenerate-image-description">Foto: Kit de lançamento do Regenerate®</span>
        </div>
        
      </div>
    </section>
  );
};

export default GetStarted;
