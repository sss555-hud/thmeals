import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../axios/apiCliant";
import ProductList from "../ProductList/ProductList";

const AlfavitSearch = () => {
    const { letter } = useParams();
    const [meals, setMeals] = useState([]);

    async function getAlfavit() {
        try {
            const res = await apiClient.get(`/search.php?f=${letter}`)
            console.log(res);

            setMeals(res.data.meals)
        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        getAlfavit()
    }, [letter]);

    return (
        <div>
            <ProductList data={meals} />
        </div>
    );
};

export default AlfavitSearch;
