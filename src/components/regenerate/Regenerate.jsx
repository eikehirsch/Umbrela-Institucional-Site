import React from 'react'
import './Regenerate.css'

const Regenerate = () => {
  return (
    <section className='regenerate-wrapper'>
          <div className="paddings innerWidth regenerate-container">
               <div className="flexColStart regenerate-head">
                    <span className='lightRedText'>Conheça nossa mais</span>
                    <span>nova linha de produtos do grupo</span>
                    <span className='lightRedText'>Umbrella Pharmaceutical Inc.</span>
               </div>
          </div>
          <div className="flexColStart paddings innerWidth commercial-container">
                  <span className='whiteText'>O envelhecimento corporal é um processo biológico inevitável. Apenas para quem não conhece o <span className='lightRedText'> Regenerate®</span>.</span>
                  <span className='whiteText'> Este será o primeiro produto farmacêutico do mundo <span className='lightRedText'>capaz de reescrever o DNA do cliente.</span>, garantindo um rejuvenescimento celular permanente.</span>
                  <span className='whiteText'> Tudo isso graças ao <span className='lightRedText'>T-Vírus</span>, que já na fase de testes finais, que atuará como o componente principal do <span className='lightRedText'>Regenerate®</span>.</span>
                  <span>* Acessibilidade: ative as legendas do vídeo no botão CC. </span>
                  <iframe className='commercial-video' width="100%" height="800px" controls src="https://www.youtube.com/embed/OP2_6dIXoKU" autoplay poster="imagemprevia.jpg">
                      Desculpa, o seu navegador não suporta vídeos incorporados,
                      mas você pode <a href="videofile.ogg">baixá-lo</a>
                      e assistir pelo seu reprodutor de mídia favorito!
                  </iframe>
           </div>


    </section>
  )
}

export default Regenerate