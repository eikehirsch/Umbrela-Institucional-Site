import React from 'react'
import './Regenerate.css'

const Regenerate = () => {
  return (
    <section className='regenerate-wrapper'>
          <div className="paddings innerWidth regenerate-container">
               <div className="flexColStart regenerate-head">
                    <span className='redText'>Conheça nossa mais</span>
                    <span>nova linha de produtos do grupo</span>
                    <span className='redText'>Umbrella Pharmaceutical Inc.</span>
               </div>
          </div>
          <div className="flexColStart paddings innerWidth commercial-container">
                  <span className='whiteText'>O envelhecimento corporal é um processo biológico inevitável. Apenas para quem não conhece o <span className='redText'> Regenerate®</span>.</span>
                  <span className='whiteText'> Este é o primeiro produto farmacêutico do mundo <span className='redText'>capaz de reescrever o DNA do cliente.</span>, garantindo um rejuvenescimento celular permanente.</span>
                  <span className='whiteText'> Isso só acontece graças ao <span className='redText'>T-Vírus</span>, recém criado por nossos cientistas, que atua como o componente principal do <span className='redText'>Regenerate®</span>. <a href='' className='link-tvirus'>Clique aqui</a> para saber mais sobre o T-Vírus.</span>
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