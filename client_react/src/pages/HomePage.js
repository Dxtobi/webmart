import React from 'react'
import styles from '../styles'
import {fakeData} from '../constants/Index'
import { HeroSection } from '../components/HeroSection'
import { Search } from '../components/search'
import { Product } from '../components/ProductList'
export const HomePage = () => {
  console.log(fakeData.length)
  return (
    <div className=''>
      <Search/>
      <HeroSection />
      <div class="divider-1">
          <div class="divider-text">Popular</div>
          <button class="divider-btn">View All</button>
      </div>
      <Product/>
    </div>
  )
}
