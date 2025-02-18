import React from 'react'
import './Country.css'
import { Link } from 'react-router-dom'
import flag from '../../data/Flag'


let imageAPI = "https://www.themealdb.com/images/icons/flags/big/64"

function Country() {
  return (
    <div className='CountryContainer'>
        <div className='CountryContent'>
      {
        flag.map((item, index) => (
          <Link key={index} to={`/country/${item.str}`} className='CountryItem'>
            <img  src={`${imageAPI}/${item.title}.png`} alt="" />
          </Link>
        ))
      }
        </div>
    </div>
  )
}

export default Country
