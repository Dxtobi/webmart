import {useState, useEffect} from 'react';
import styles from '../styles';
import anime from '../constants/Animies.json';
import {motion} from 'framer-motion';
import axios from 'axios'
import { fadeIn } from '../utils/motion';
import { BiArrowToRight } from 'react-icons/bi';
import { Search } from '../components/search';
import Movie from './Movie';



//const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/anime',
    params: {
      page: '1',
      size: '10',
      search: 'Fullmetal',
      genres: 'Fantasy,Drama',
      sortBy: 'ranking',
      sortOrder: 'asc'
    },
    headers: {
      'X-RapidAPI-Key': 'a533fca833msh4449c115562caabp1b58aajsn6a308cc0bc75',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };


const gameCat = [
    'General', 'Popular', 'upcoming'
];

export const Anime = () => {

  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(1);
  const [animeType, setanime] = useState([]);
  const [showMovie, setShowMovie] = useState(false);
  const [toShow, setToShow] = useState(null);

  console.log(animeType);

  const setOnclick = (index) => {

    setShowMovie(!showMovie)
    setToShow(index)
  }
  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setanime(response.data.data)
    }).catch(function (error) {
      setanime(anime.data)
      console.error(error);
    });
  }, []);
  
  const onRight = () => {
    if (position < animeType.slice(0, 5).length - 1) {
      setPosition(position + 1)
    }
  }
  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
  }

  return (
    <div className={`pt-[100px] -z-10 flex flex-col m-auto`}>
        <div className='top-game'>
        <div className={`${styles.xPaddings}`}>
              <div className={'lets-explore text-[#7d7d7d]'}>Let's explore</div>
                <div className='text-2xl'>Best anime</div>
                <div className='text-xl mt-5'>Category</div>
                <div className='category-list flex gap-4 mt-3'>
                    {
                      gameCat.map((cat, i) => (
                          <div key={i} onClick={()=>setActive(i)} className={`${active === i ? 'active' : 'inactive' }`}>{cat}</div>
                      ))
                    }
               </div>
        </div>
        <Search/>
        <div className="scroll-holder lg:h-[100vh]">
        <button className='leftslide-btn' onClick={onLeft}/>
        <button className='rightslide-btn ' onClick={onRight}/>
          <div className='top-scroll'>
            {
              animeType.slice(0, 5).map((map, i)=>(
                <motion.div
                  initial={{ scale: 0, rotation: -180 }}
                  animate={{
                    rotate: 0,
                    left:`${(i - position) * 60 - 30}vw`,
                    scale:i === position ? 1 : 0.8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping:20
                  }}
                  className={`${i === position && 'active-img'} image-slide-continer lg:w-[20vw]`}>
                 <div className='relative w-full h-full flex flex-col items-center img-cont-foot'>
                  <img src={`${map.image}`} alt='' className='w-full slide-img rounded-4' />
                  <div className='movie-footer-blur'/>
                  <div className='movie-footer flex justify-between p-1' onClick={()=>setOnclick(i)}>
                      <div>More</div>
                      <div>
                        <BiArrowToRight/>
                      </div>
                  </div>
                 </div>
                </motion.div>
              ))
            }
          </div>
        </div>
        <div className='divider'>
          <div className='d-text'>Movies</div> 
          <div className='divider-flex lg:w-[20%]'>
            <div className='d1'></div>
            <div className='d2'></div>
            <div className='d3'></div>
          </div>
        </div>
            {
              animeType.length !== 0 ?
          (<div className={`${styles.interWidth} ${styles.xPaddings} other-movie-list m-auto`}>
              {
                animeType.slice(5).map((game, i) => (
                  <motion.div
                    variants={fadeIn('up', 'spring', i * 0.5, 0.75)}
                    key={i}
                    onClick={() => setOnclick(i)}
                    className='movie-card'>
                    <div className='w-[100%] card-img-container'>
                      <img src={`${game.image}`} alt='' className='w-full card-img'  />
                    </div>
                    <div className='flex justify-between items-center text-movie'>
                      <div>
                        <div className=' text-lg'>{game.alternativeTitles[3]}</div>
                      </div>
                    </div>
                    <div className='text-[#7d7d7d]'>{game.type}</div>
                  </motion.div>
                ))
              }</div>) : (<div className='loading'>Loading..</div>)}
        {
          showMovie && <Movie data={animeType[toShow]} />
        }
        </div>
    </div>
      )
    }
