import React from 'react'
import {useState} from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from "../../utils/accordion"

const Value = () => {
  return (
    <section id="values" className='value-wrapper'>
      <div className="paddings innerWidth flexCenter value-container">
        {/* left side */}
        <div className="value-left">
          <div className="image-container">
            <img className='value-image' src="./value.png" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColCenter value-right">
          <span className='darkRedText'>Nossos Valores</span>
          <span>Valores Que Entregamos A Você</span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {
            data.map((item, i) => {

              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>

                      <AccordionItemState>
                        {({expanded}) => 
                          expanded 
                            ? setClassName("expanded") 
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="accordionButtonText">{item.heading}</span>
                      <div className="flexCenter icon"><MdOutlineArrowDropDown size={20}/></div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>{item.detail}</AccordionItemPanel>

                </AccordionItem>
              )
            })
          }

        </Accordion>

        </div>
      
      </div>
    </section>
  )
}

export default Value