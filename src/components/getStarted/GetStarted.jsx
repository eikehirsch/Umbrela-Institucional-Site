import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section id="launch" className="getStarted-wrapper">
          <div className="paddings innerWidth getStarted-container">
               <div className="flexColCenter inner-container">
                    <span>Contribua com o lançamento do Regenerate®!</span>
                    <span>A <span className='darkRedText spanStarted'>conclusão do desenvolvimento do T-Vírus</span>, componente central do Regenerate®, é o que nos separa de liberarmos ao público nosso
                         mais estimado produto.
                    </span>
                    <span>A <span className='darkRedText spanStarted'>Umbrella Corporation escolherá felizardos</span> para ter a honra de participar dessa reta final.</span>
                    <span>Gostaria de ter seu nome gravado eternamente na história da medicina moderna?</span>
                    <button className='button'>
                         <a href="mailto:umbrella_selecao_tvirus@umbrella.com">Participar da seleção</a>
                    </button>
               </div>
          </div>
    </section>
  )
}

export default GetStarted