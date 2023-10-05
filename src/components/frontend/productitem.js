import { urlImage } from "../../config";
import { Link } from "react-router-dom";
function ProductItem(props) {
    return (
        <div className="col-md-3 mb-3"  >
            <div className="product-item border">
                <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                    <div className="product-image">
                        <img src={urlImage + "product/" + props.product.image} className="img-fluid" alt="san pham" />
                    </div>
                </Link>
                <div className="product-name p-2">
                    <h3 className="text-center fs-4">
                        <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                            {props.product.name}
                        </Link>
                    </h3>
                </div>
                <div className="product-pice p-2 fs-4 ">
                    <div className="row">
                        <div className="col-6">
                            <strong className="text-danger fs-4">{props.product.price}<sup>đ</sup></strong>
                        </div>
                        <div className="col-6 text-end">
                            <del className="text fs-4">{props.product.price_sale}</del><sup>đ</sup>
                        </div></div>
                </div>
                <div className="link-detail">Chi tiết</div>
            </div>


        </div>
    );
}
export default ProductItem;