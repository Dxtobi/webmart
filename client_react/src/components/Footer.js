import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../constants/Index'


export const Footer = () => {
  return (
    <div  className={`rounded-full p-10 flex justify-between items-center py-2 fixed bottom-5 left-0 right-0 glassmorphism w-[80%] m-auto z-10`}>
      {
        footerLinks.map((link, i)=>(
          <Link to={link.path} key={i}>
            <link.icon size={30}/>
          </Link>
        ))
      }
    </div>
  )
}
