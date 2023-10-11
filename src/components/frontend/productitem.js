import accounting from "accounting";
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
                    <div className="text-center  fs-4">
                        <h6 className=" text-dark"  to={"/chi-tiet-san-pham/" + props.product.slug}>
                            {props.product.name}
                        </h6>
                        <div className="row">
                        <div className="col-6">
                            <strong className="text-danger ">Giá:{accounting.formatNumber(props.product.price, 0, ".", ",")}<sup >đ</sup></strong>
                            <br/>
                            {/* <del className="text-danger ">{accounting.formatNumber(props.product.price_sale, 0, ".", ",")} */}
                           {/* </del><sup className="text-danger">đ</sup> */}
                            <div>
                            <button className="  bg-danger text-white fs-5" style={{width:100,height:40}}> Mua </button>
                           </div>
                           
                        </div>
                        <div className="col-6 text-end">
                       
                        
                        </div>
                        
                    </div>
                    </div>
              

                </div>
               
                   
            </div>


        </div>
    );
}
export default ProductItem;