import React, { useEffect, useState } from "react";

import productservice from "../../../services/ProductService";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/frontend/productitem";
function ProductDetail() {
    const [product, setProduct] = useState([]);
    const [product_other, setProducOther] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setProduct(result.data.product);
                    setProducOther(result.data.product_other);
                }

            });
        })()
    }, [slug])
    return (

        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={urlImage + "product/" + product.image} alt="hinh" className="img-fluid w-100" />

                    </div>
                    <div className="col-md-6"><h1>{product.name}</h1>
                        <h1>{product.price}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"> {product.detail}</div>
                    <h3>Sản phẩm cùng loại</h3>
                </div>
                <div className="row">
                    {product_other.map(function (product, index) {
                        return <ProductItem key={index} product={product} />
                    })}

                </div>
            </div>
        </section>
    );
}

export default ProductDetail;