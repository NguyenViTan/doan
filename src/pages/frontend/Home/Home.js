import React, { useEffect, useState } from "react";
// import Logo from '../../../assets/images/anh1.png';
// import { Link } from "react-router-dom";
import Slider from "./Slider"
import categoryservice from "../../../services/CategoryService";
import ProductHome from "./ProductHome";

function Home() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            const result = await categoryservice.getCategoryByParentId(0)
            setCategorys(result.data.categorys);
        })();

    }, []);
    return (<section className="maincontent">

        <Slider />
        {categorys.map(function (category, index) {
            return <ProductHome key={index} category={category} />
        })}
    </section >
    )
};
export default Home;


