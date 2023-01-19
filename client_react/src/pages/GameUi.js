import {useState, useEffect} from 'react';
import styles from '../styles';
import { fakeData } from '../constants/Index';
import games from '../constants/games.populer.json';
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios'
const defUrl = 'https://opencritic-api.p.rapidapi.com/game/upcoming'


//const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game/upcoming',
  headers: {
    'X-RapidAPI-Key': 'dfbb170ab3msh126eaaef5e3d256p1cc0aejsn0309a9bf5c62',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
  }
};


const gameCat = [
    'General', 'Popular', 'upcoming'
];

export const Game = () => {

  const [active, setActive] = useState(0);
  const [gamesType, setGames] = useState([]);
  console.log(fakeData.length, games, gamesType);

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setGames(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  },[])

  return (
    <div className={`${styles.xPaddings}  ${styles.interWidth} pt-[100px] -z-10 flex flex-col m-auto`}>
        <div className='top-game'>
            <div className='lets-explore text-[#7d7d7d]'>Let's explore</div>
              <div className='text-2xl'>Best Games</div>

              <div className='category-list flex gap-4 mt-5'>
                  {
                    gameCat.map((cat, i) => (
                        <div key={i} onClick={()=>setActive(i)} className={`${active === i ? 'active' : 'inactive' }`}>{cat}</div>
                    ))
                  }
        </div>
        
        <div>
          {
            gamesType.map((game, i) => (
              <div key={i}>
                <div className='w-[70%]'>
                  <img src={`${defUrl}/${game.images.box.og}`} alt='' className='w-full' />
                </div>
                <div className='flex justify-between items-center'>
                  <div>
                    <div className=' text-lg'>{game.name}</div>
                    <div className='text-[#7d7d7d]'>{game.tier}</div>
                  </div>
                  <div className='flex justify-center items-center'>
                    <BsArrowRight/>
                  </div>
                </div>
                <div>{game.firstReleaseDate}</div>
              </div>
            ))
          }
        </div>
        </div>
    </div>
  )
}
