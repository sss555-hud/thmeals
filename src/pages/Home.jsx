import React, {useEffect, useState} from 'react'
import Section1 from '../components/Section1/Section1'
import Search from '../components/Search/Search'
import Section2 from '../components/Section2/Section2'
import ProductList from '../components/ProductList/ProductList'
import apiClient from '../axios/apiCliant'
import Country from '../components/Country/Country'

function Home() {

  const [list, setList] = useState([])

  async function getList() {
    try {
      const res = await apiClient.get(`/search.php?s=a`)
      console.log(res);
      setList(res.data.meals)
    } catch (error) {
      
    }
  }

useEffect(() => {
  getList()
}, [])

  return (
    <div>
      <Section1 />
      <hr  className='container'/>
      <Search />
      <hr  className='container'/>
      {/* <Section2 /> */}
      <ProductList data={list} />
      <Country /> 
    </div>
  )
}

export default Home
