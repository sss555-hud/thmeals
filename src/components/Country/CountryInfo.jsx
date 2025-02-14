import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../../axios/apiCliant'
import ProductList from '../ProductList/ProductList'

function CountryInfo() {
    const {country} = useParams();
    const [flags, setFlags] = useState([]);

    async function getCountry() {
        try {
            const res = await apiClient.get(`/filter.php?a=${country}`)
            console.log(res);

            setFlags(res.data.meals || [])
        } catch (error) {
            console.log(error);

        }
    }
useEffect(() => {
    getCountry()
}, [country]);


  return (
    <div>
      <ProductList data={flags} />
    </div>
  )
}

export default CountryInfo
