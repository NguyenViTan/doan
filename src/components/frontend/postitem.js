import { urlImage } from "../../config";
import { Link } from "react-router-dom";
function Post(props) {
    return (
        <div className="col-md-3 mb-3"  >
            <div className="product-item border">
                <Link to={"/bai-viet/" + props.post.slug}>
                    <div className="product-image">
                        <img src={urlImage + "post/" + props.post.image} className="img-fluid" alt="bai viet" />
                    </div>
                </Link>
                <div className="product-name p-2">
                    <h3 className="text-center fs-4">
                        <Link to={"/bai-viet/" + props.post.slug}>
                            {props.post.name}
                        </Link>
                    </h3>
                </div>
                <div className="product-pice p-2 fs-4 ">
                    <div className="row">
                        <div className="col-6">
                            <strong className="text-danger fs-4">{props.post.detail}</strong>
                        </div>
                        <div className="col-6 text-end">
                            <p className="text fs-4" >{props.post.title}</p>
                        </div></div>
                </div>
                <div className="link-detail">Chi tiết</div>
            </div>


        </div>
    );
}
export default Post;