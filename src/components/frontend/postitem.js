import { urlImage } from "../../config";
import { Link } from "react-router-dom";

function Post(props) {
    return (
        <div   >
            {/* <div className="product-item border">
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
            </div> */}





           

            <div className="row   ">
           
                <img src={urlImage + "post/" + props.post.image} className="img-fluid" alt="bai viet" />
                    <h6>15/10/2023 -bởi:Ego Creative</h6>
                    <h2>{props.post.title}</h2>
                    <p>{props.post.detail}</p>
                </div>
                {/* <div className="col-md-6  ">
                    <div className="row border-top">
                        <div className="col-5">
                        <img  className="img-fluid w-100" src={a4} alt="sai"/>
                        </div>
                        <div className="col-7">
                        <h6>15/10/2023 -bởi:Ego Creative</h6>
                        <h5>Singapore khai trương du thuyền hạng sang cho mèo</h5>
                        <p>Công ty Singapore khai trương du thuyền hạng sang phục vụ những người nuôi mèo và con vật cưng của họ du ngoạn trên biển. </p>
                        </div>
                    </div>
                    <div className="row border-top">
                        <div className="col-5">
                        <img  className="img-fluid w-100" src={a2} alt="sai"/>
                        </div>
                        <div className="col-7">
                        <h6>15/10/2023 -bởi:Ego Creative</h6>
                        <h5>Một đêm mèo hoang có thể bắt hàng nghìn con chuột</h5>
                        <p>Đủ ăn, có chỗ ở, nhưng Conan không mấy quan tâm đến nhiệm vụ. Con mèo thích ngủ, phơi nắng trước quán cà phê gần đó, hay chơi với những quả bóng trên sàn khiến người qua đường thích thú. </p>
                        </div>
                    </div>
                    <div className="row border-top">
                        <div className="col-5">
                        <img  className="img-fluid w-100" src={a3} alt="sai"/>
                        </div>
                        <div className="col-7">
                        <h6>15/10/2023 -bởi:Ego Creative</h6>
                        <h5>Đội quân săn chuột ở thủ đô Mỹ</h5>
                        <p>Một đêm tháng 6 oi bức, hàng chục người dắt chó tới tụ điểm giải trí ở thủ đô Washington, bắt đầu chuyến săn chuột theo tuần. </p>
                        </div>
                    </div>
                </div> */}
                
                
            </div>
   

        
    );
}
export default Post;