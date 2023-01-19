import {BiMoviePlay, BiMusic } from 'react-icons/bi';
import { GiAnimalSkull } from 'react-icons/gi';

export const headerConstants = {
    headerBrandLogo: '/images/reactjs.svg',
    headerBrandName: 'BRAND NAME',
    otherLinks: [
        { linkName: 'Contact', path: '/'},
        { linkName: 'Blog', path: '/'},
        { linkName: 'Contact', path: '/'},
    ]
}

export const footerLinks = [
    {
        path: '/',
        icon: BiMoviePlay,
        name: 'Movies'
    },
    {
        path: '/anime',
        icon: GiAnimalSkull,
        name: 'Anime'
    },

    {
        path: '/music',
        icon: BiMusic,
        name: 'User'
    }
]

const longtext = `Lorem ipsum,  repellat voluptatibus. 
Natus at facilis alias sitorrupti deleniti eum nulla omnis laudantium repellendus
illum.  repellat voluptatibus. 
Natus at facilis alias sitorrupti deleniti eum nulla omnis laudantium repellendus
illum. repellat voluptatibus. 
Natus at facilis alias sitorrupti deleniti eum nulla omnis laudantium repellendus
illumrepellat voluptatibus. 
Natus at facilis alias sitorrupti deleniti eum nulla omnis laudantium repellendus
illum`

export const alltext = {
    longText: longtext,
    shortText: 'Lorem ipsum,  repellat voluptatibus. Natus at facilis alias sitorrupti deleniti eum nulla omnis'        

}


export const fakeData = [
    {
        imgUrl: '/fakedata/game-01.jpg',
        name: 'After Life',
        company: 'Akan Craft Game dev',
        discription: longtext,
        link: '/item'
    },
    {
        imgUrl: '/fakedata/game-02.jpg',
        name: 'War zone',
        company: 'Gameloft ',
        discription: longtext,
        link: '/item'
    },
    {
        imgUrl: '/fakedata/game-03.jpg',
        name: 'dome',
        company: 'Akan Craft Game dev',
        discription: longtext,
        link: '/item'
    },
    {
        imgUrl: '/fakedata/game-04.jpg',
        name: 'skyfall',
        company: 'utility',
        discription: longtext,
        link: '/item'
    },
    {
        imgUrl: '/fakedata/game-05.jpg',
        name: 'redick',
        company: 'base game',
        discription: longtext,
        link: '/item'
    },
    {
        imgUrl: '/fakedata/game-06.jpg',
        name: 'phsyco',
        company: 'Akan Craft Game dev',
        discription: longtext,
        link: '/item'
    },
    {
        imgUrl: '/fakedata/game-07.jpg',
        name: 'After Life',
        company: 'Akan Craft Game dev',
        discription: longtext,
        link: '/item'
    },
    {
        imgUrl: '/fakedata/game-15.jpg',
        name: 'After Life',
        company: 'Akan Craft Game dev',
        discription: longtext,
        link: '/item'
    }
]