import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";
import Login from "../login/Login";

const About = () => {
  const [isFirstCardOpened, setIsFirstCardOpened] = useState(false);
  const [isSecondCardOpened, setIsSecondCardOpened] = useState(false);
  const [isThirdCardOpened, setIsThirdCardOpened] = useState(false);
  const [isLoginShowed, setIsLoginShowed] = useState(true);

  useEffect(() => {
    if (isFirstCardOpened || isSecondCardOpened || isThirdCardOpened) {
      setIsLoginShowed(false);
    } else {
      setIsLoginShowed(true);
    }
  }, [isFirstCardOpened, isSecondCardOpened, isThirdCardOpened]);

  return (
    <div className="about-wrapper">
      <div className="paddings innerWidth flexColCenter about-container">
        <div className="flexColCenter titles-container">
          {isLoginShowed && <Login />}

          <h1 className="about-title">Sobre nós</h1>
          <h2 className="about-subtitle">
            Sabemos que a confiança é um produto da transparência, então que tal
            nos conhecer melhor?
          </h2>
        </div>
        <div className="flexColCenter cards-main-container">
          <motion.div
            transition={{ layout: { duration: 0.5 } }}
            layout
            onClick={() => setIsFirstCardOpened(!isFirstCardOpened)}
            className="about-card"
            style={{
              borderRadius: "0.4rem",
              boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <motion.h2 layout="position" className="about-card-title">
              Nossa casa: Raccoon City
            </motion.h2>
            {isFirstCardOpened && (
              <motion.div
                className="about-lower-container flexCenter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <div className="about-paragraph-container">
                  <p className="about-card-paragraph">
                    <span className="bold">Raccoon City (EUA)</span> é o berço
                    da{" "}
                    <span className="lightRedText">Umbrella Corporation</span>.
                  </p>
                  <p className="about-card-paragraph">
                    Há 100 anos, ambas cidade e empresa, igualmente pequenas,
                    iniciaram uma duradoura parceria que culminou no orgulho que
                    são hoje.
                  </p>
                  <button className="button-about button">
                    <Link to="/raccoon-city">Mais sobre Raccoon City</Link>
                  </button>
                </div>

                <img className="about-card-image" src="./welcome.png" alt="" />
              </motion.div>
            )}
          </motion.div>
          <motion.div
            transition={{ layout: { duration: 0.5 } }}
            layout
            onClick={() => setIsSecondCardOpened(!isSecondCardOpened)}
            className="about-card"
            style={{
              borderRadius: "0.4rem",
              boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <motion.h2 layout="position" className="about-card-title">
              Nossa história
            </motion.h2>
            {isSecondCardOpened && (
              <motion.div
                className="about-lower-container flexCenter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <div className="about-paragraph-container">
                  <p className="about-card-paragraph">
                    Do meio-oeste dos Estados Unidos para o mundo.
                  </p>
                  <p className="about-card-paragraph">
                    Todo grande ideal vem de um grande idealizador. Somos a
                    referência máxima em saúde hoje graças à visão
                    revolucionária de{" "}
                    <span className="bold">Oswell E. Spencer</span>, fundador da
                    Umbrella Corporation.
                  </p>
                  <button className="button-about button">
                    <Link to="/nossa-historia">Mais sobre nossa história</Link>
                  </button>
                </div>

                <img className="about-card-image" src="./spencer.jpg" alt="" />
              </motion.div>
            )}
          </motion.div>
          <motion.div
            transition={{ layout: { duration: 0.5 } }}
            layout
            onClick={() => setIsThirdCardOpened(!isThirdCardOpened)}
            className="about-card"
            style={{
              borderRadius: "0.4rem",
              boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <motion.h2 layout="position" className="about-card-title">
              Nossa IA: Red Queen
            </motion.h2>
            {isThirdCardOpened && (
              <motion.div
                className="about-lower-container flexCenter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <div className="about-paragraph-container">
                  <p className="about-card-paragraph">
                    A <span className="lightRedText">Red Queen</span> é a
                    inteligência artificial da Umbrella Corporation.
                  </p>
                  <p className="about-card-paragraph">
                    Além de ser responsável pela manutenção e controle das
                    instalações da compania, ela também pode conversar com você
                    a respeito da nossa empresa. Gostaria de conhecê-la?
                  </p>
                  <button className="button-about button">
                    <Link to="red-queen">Mais sobre Red Queen</Link>
                  </button>
                </div>

                <img
                  className="about-card-image"
                  src="./red-queen.png"
                  alt=""
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
