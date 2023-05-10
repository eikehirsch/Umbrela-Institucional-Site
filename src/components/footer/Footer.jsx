import React from 'react'
import './Footer.css'

import { IconContext } from "react-icons";
import { SlSocialInstagram, 
     SlSocialFacebook, 
     SlSocialTwitter, 
     SlSocialYoutube, 
     SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <section className="footer-wrapper">
          <div className="paddings innerWidth flexCenter footer-container">
               <div className="first-row flexCenter">
                    <div className="left-footer flexColStart">
                         <span className='umbrella-title-left'>Umbrella Corporation Inc.</span>
                         <span>Todos os direitos reservados. ©</span>
                         <div className='flexCenter oms-container'>
                         <img src="./oms.png" alt="" className="oms-logo" />
                         </div>
                    </div>

                    <div className="right-footer flexStart">
                         <div className="solutions-container flexColStart">
                              <h3>Soluções</h3>
                              <span><a className='footer-link' href=''>Para fornecedores</a></span>
                              <span><a className='footer-link' href=''>Para empresas</a></span>
                              <span><a className='footer-link' href=''>Para clientes</a></span>
                         </div>

                         <div className="umbrella-container flexColStart">
                              <h3>A Umbrella</h3>
                              <span><a className='footer-link' href=''>Institucional</a></span>
                              <span><a className='footer-link' href=''>Carreiras</a></span>
                              <span><a className='footer-link' href=''>Vagas</a></span>
                         </div>

                         <div className="support-container flexColStart">
                              <h3>Contato</h3>
                              <span><a className='footer-link' href=''>Suporte Técnico</a></span>
                              <div className='flexColStart'>
                                   <span><a className='footer-link' href=''>Relacionamento</a></span>
                                   <span><a className='footer-link' href=''>Comercial</a></span>
                              </div>
                              <span><a className='footer-link' href=''>Canal de Denúncia</a></span>
                         </div>

                         <div className="content-container flexColStart">
                              <h3>Conteúdo</h3>
                              <span><a className='footer-link' href=''>Newsletter</a></span>
                              <span><a className='footer-link' href=''>Eventos</a></span>
                              <span><a className='footer-link' href=''>Blog</a></span>
                         </div>
                    </div>
               </div>

               <IconContext.Provider value={{ color: "red", size: "2rem" }}>
                    <div className="second-row flexCenter">
                         <SlSocialFacebook/>
                         <SlSocialInstagram/>
                         <SlSocialTwitter/>
                         <SlSocialYoutube/>
                         <SlSocialLinkedin/>
                    </div>
               </IconContext.Provider>
          </div>
    </section>
  )
}

export default Footer