import React from "react";
import "./RaccoonCity.css";
import RoutesNavBar from "../../components/routes-navBar/RoutesNavBar";
import { motion } from "framer-motion";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

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
      <div className="slider-raccoon-slider-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next-raccoon-slide",
            prevEl: ".button-prev-raccoon-slide",
          }}
          modules={[Navigation]}
          className="swiper-raccoon"
        >
          <SwiperSlide>
            <div className="flexCenter slider-raccoon-slider-1">
              <div className="flexColCenter slider-raccoon-text">
                <h3 className="slider-raccoon-title">As Montanhas Arklay</h3>
                <h3 className="slider-raccoon-subtitle">
                  Conheça a natureza que abraça Raccoon City
                </h3>
                <p className="slider-raccoon-paragraph">
                  À 30km do centro urbano, encontra-se o{" "}
                  <b>parque nacional das Montanhas Arklay</b>. Aqui, cada passo
                  é uma descoberta e cada subida é uma conquista. Seja você um
                  aventureiro em busca de adrenalina ou alguém que deseja apenas
                  desfrutar da paz e tranquilidade, as montanhas oferecem algo
                  para todos.
                </p>
              </div>
              <img
                src="./arklay-montains.png"
                alt=""
                className="slider-raccoon-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flexCenter slider-raccoon-slider-1">
              <div className="flexColCenter slider-raccoon-text">
                <h3 className="slider-raccoon-title">
                  Adrenalina com segurança
                </h3>
                <h3 className="slider-raccoon-subtitle">
                  Guardas florestais da RPD patrulham as montanhas
                </h3>
                <p className="slider-raccoon-paragraph">
                  Sabemos que um programa na natureza precisa ser energético,
                  contudo, a segurança dos trilheiros ainda é importante. Por
                  isso, o <b>Raccoon Police Department (RPD)</b> emprega guardas
                  florestais espalhados por todo o perímetro Arklay prontos para
                  servir em qualquer situação emergencial.
                </p>
              </div>
              <img src="./ranger.jpg" alt="" className="slider-raccoon-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flexCenter slider-raccoon-slider-1">
              <div className="flexColCenter slider-raccoon-text">
                <h3 className="slider-raccoon-title">
                  A Delegacia de Polícia de Raccoon City
                </h3>
                <h3 className="slider-raccoon-subtitle">
                  Antes um museum estadual, hoje uma delegacia
                </h3>
                <p className="slider-raccoon-paragraph">
                  O Departamento de Polícia de Raccoon City não é importante
                  apenas para proteger a ordem e segurança dos moradores da
                  cidade, mas também para os turistas. Caso necessite de
                  qualquer dúvida ou emergência, dirija-se à RPD e será muito
                  bem atendido.
                </p>
              </div>
              <img src="./rpd.jpg" alt="" className="slider-raccoon-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flexCenter slider-raccoon-slider-1">
              <div className="flexColCenter slider-raccoon-text">
                <h3 className="slider-raccoon-title">A Mansão Spencer</h3>
                <h3 className="slider-raccoon-subtitle">
                  Aberta ao público de segunda à sexta
                </h3>
                <p className="slider-raccoon-paragraph">
                  Você não estaria lendo este texto se Oswald E. Spencer
                  não tivesse existido. Idealizador e fundador da Umbrella
                  Corporation, Spencer inicialmente utilizou sua própria casa
                  para ser a primeira farmácia da compania a ser aberta. Visite,
                  <b> no centro de Raccoon City</b>, para conhecer mais a nossa
                  história.
                </p>
              </div>
              <img
                src="./raccoon-mansion.jpg"
                alt=""
                className="slider-raccoon-image"
              />
            </div>
          </SwiperSlide>
          <div className="button-prev-raccoon-slide ">
            <HiOutlineArrowNarrowLeft />
          </div>
          <div className="button-next-raccoon-slide ">
            <HiOutlineArrowNarrowRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default RaccoonCity;
