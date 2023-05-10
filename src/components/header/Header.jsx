import React, {useState, useEffect} from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi' 
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./umbrella-logo.png" alt="Umbrella Logo" />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="">Produtos</a>
            <a href="">Nossos valores</a>
            <a href="">Canais</a>
            <a href="">Newsletter</a>
            <button className='button'>
              <a href="">Contato</a>
            </button>
          </div>

          <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={50}/>
        </div>
        </OutsideClickHandler>
      </div>

    </section>
  )
}

export default Header