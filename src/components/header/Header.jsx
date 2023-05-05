import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./umbrella-logo.png" alt="Umbrella Logo" />

       <div className="flexCenter h-menu">
        <a href="">Produtos</a>
        <a href="">Nossos valores</a>
        <a href="">Canais</a>
        <a href="">Newsletter</a>
        <button className='button'>
          <a href="">Contato</a>
        </button>
       </div>

      </div>
    </section>
  )
}

export default Header