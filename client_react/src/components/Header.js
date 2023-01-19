
import {useState} from 'react'
import React from 'react'
import styles from '../styles'



export const Header = ({toggleTheme, mood}) => {
    const [menu, setMenu] = useState(false);

  return (
      <header 
            classNameName={`${styles.xPaddings} header `}
      >
         
        <div className="header-inner">
            
            <div className="brand-names">
                <div className="bn1">Web</div>
                <div className="bn2">Mart</div>
            </div>
            <div className="header-right-items">
                <div className="header-chart">
                    chart
                </div>  
                <div classNameName="header-brand">
                    <img className="header-img" alt='' src="../../Pictures/Saved Pictures/71072cfd4a09ca4f6bace103af802f2a.jpg"/>
                </div>
            </div>
        </div>
      </header>
  )
}
