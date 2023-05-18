import React from "react";
import "./RaccoonCity.css";
import RoutesNavBar from "../../components/routes-navBar/RoutesNavBar";
import { motion } from "framer-motion";

const RaccoonCity = () => {
  return (
    <div className="welcome-racconCity-wrapper">
      <RoutesNavBar />
      <motion.h1
        initial={{ y: "-4rem", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 4 }}
        className="welcome-title"
      >
        Bem-vindo à Raccoon-City!
      </motion.h1>

      <motion.h2
        initial={{ y: "-4rem", opacity: 0 }}
        animate={{ y: "0", opacity: 2 }}
        transition={{ duration: 4 }}
        className="welcome-subtitle"
      >
        O berço da Umbrella Corportion
      </motion.h2>
      <img className="raccoon-city-imagem" src="./raccoon-city.jpg" alt="" />
      <section className="innerWidth paddings flexColCenter">
        <div className="flexColCenter">
          <h1 className="about-raccoon-city-title">Um pouco do nosso lar</h1>
          <div className="flexCenter welcome-imagesContainer">
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default RaccoonCity;
