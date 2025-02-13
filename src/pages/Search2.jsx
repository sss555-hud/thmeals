import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import apiClient from '../axios/apiCliant'
import ProductList from '../components/ProductList/ProductList'

function Search2() {
    const {value} = useParams()
    const [product, setProduct] = useState([])
 
    async function getSearchProduct() {
        try {
            const res = await apiClient.get(`/search.php?s=${value}`)
            console.log(res);
            
            setProduct(res.data.meals)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getSearchProduct()
    }, [value])
    return (
    <div>
      <ProductList data={product} />
    </div>
  )
}

export default Search2
