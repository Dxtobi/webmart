import React from 'react'
import styles from '../styles'
import { MdCancel, MdLink } from 'react-icons/md'
import {Link} from 'react-router-dom'
export const Menu = ({toggleTheme, mood, toggleMenu, contentArray=[]}) => {
  return (
      <div className={`glassmorphism min-w-[80%] lg:min-w-[50%] ${styles.paddings} absolute dark:bg-[#152020d3] min-h-[100vh] right-0 top-0 z-20  bg-[#f3f4ffdb] `} >
          <div className="flex justify-end my-6" >
              <button onClick={() => toggleMenu(false)}><MdCancel size={30}/></button>
          </div>
          <div className='flex justify-between items-center my-6'>
              <div>Theme</div><button className='p-3 bg-[#252d9432] dark:bg-gray-700 rounded-[10px]' onClick={()=>toggleTheme(!mood)}>Toggle</button>
          </div>
          {
              contentArray.map((link, i) => (
                  <div key={i} className='flex justify-between items-center my-6 font-bold'>
                      <div>{link.linkName}</div><Link to={link.path} className='p-3 bg-[#252d9432] dark:bg-gray-700 rounded-[10px]' ><MdLink size={30} /></Link>
                  </div>
                  
            ))
          }
      </div>
  )
}
