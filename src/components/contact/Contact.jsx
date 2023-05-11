import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section id="contacts" className='contact-wrapper'>
          <div className="paddings innerWidth flexCenter contact-container">
               {/* left side */}
               <div className="flexColStart contact-left">
                    <span>Nossos Contatos</span>
                    <span>Estamos sempre prontos para fornecer o melhor serviço.</span>

                    <div className="flexColStart contactModes">
                         {/* first row */}
                         <div className="flexStart row">
                              <div className="flexColCenter mode">
                                   <div className="flexStart">
                                        <div className="flexCenter icon">
                                             <MdCall size={25}/>
                                        </div>

                                        <div className="flexColStart detail">
                                             <span>Ligue</span>
                                             <span>41 3222-5648</span>
                                        </div>
                                   </div>

                                   <div className="flexCenter button">
                                        Ligue Agora
                                   </div>
                              </div>

                              { /* second mode */}
                              <div className="flexColCenter mode">
                                   <div className="flexStart">
                                        <div className="flexCenter icon">
                                             <BsFillChatDotsFill size={25}/>
                                        </div>

                                        <div className="flexColStart detail">
                                             <span>Chat</span>
                                             <span>41 3222-5648</span>
                                        </div>
                                   </div>

                                   <div className="flexCenter button">
                                        Fale agora
                                   </div>
                              </div>
                         </div>

                         {/* second row */}
                         <div className="flexStart row">
                              <div className="flexColCenter mode">
                                   <div className="flexStart">
                                        <div className="flexCenter icon">
                                             <BsFillChatDotsFill size={25}/>
                                        </div>

                                        <div className="flexColStart detail">
                                             <span>Por Vídeo</span>
                                             <span>41 3222-5648</span>
                                        </div>
                                   </div>

                                   <div className="flexCenter button">
                                        Chame em vídeo agora
                                   </div>
                              </div>

                              { /* fourth mode */}
                              <div className="flexColCenter mode">
                                   <div className="flexStart">
                                        <div className="flexCenter icon">
                                             <HiChatBubbleBottomCenter size={25}/>
                                        </div>

                                        <div className="flexColStart detail">
                                             <span>Mensagem</span>
                                             <span>41 3222-5648</span>
                                        </div>
                                   </div>

                                   <div className="flexCenter button">
                                        Envie mensagem agora
                                   </div>
                              </div>
                         </div>
                         
                    </div>
               </div>
          </div>
    </section>
  )
}

export default Contact