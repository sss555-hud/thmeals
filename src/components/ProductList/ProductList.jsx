import React from 'react'
import './ProductList.css'
import Card from '../Card/Card'

function ProductList({data}) {
  return (
    <div className='food'>
      {
      data.map((item) => (
        <Card key={item.idMeal} food={item} />
      ))
      }
    </div>
  )
} 

export default ProductList
