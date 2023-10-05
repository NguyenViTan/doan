import React from "react";
import Logo from '../../assets/images/logo.webp';
import { Link } from "react-router-dom";


// import { FaPhoneAlt, FaShoppingCart, FaRegistered, FaSignInAlt } from "react-icons/fa";
function Header() {
    return (<section class="myheader ">
        <div class="container my-3">
            <div class="row">
                <div class="col-md-3 ">
                    <Link>
                        <img src={Logo} className="img-fluid" alt="logo" />
                    </Link>
                </div>

                <div class="col-md-4 ">
                    <div class="input-group md-3 my-3">
                        <input type="text " class="form-control" placeholder="Từ khóa tìm kiếm" aria-label="Từ khóa tìm kiếm" aria-describedby="basic-addon2" />
                        <span class="input-group-text" id="basic-addon2">Tìm kiếm</span>
                    </div>
                </div>
                <div class="col-md-3 my-3">
                    <div class="row ">
                        <div class="col">
                            <div class="row">
                                <div class="col-3">
                                    <div><i class="fa-solid fa-phone"></i></div>
                                </div>
                                <div class="col-9">
                                    Hotline  <br></br>
                                    <strong class="text-danger">0914882582</strong>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col-3"><i class="bi bi-telephone"></i></div>
                                <div class="col-9">
                                    Xin chào <br></br>
                                    <strong class="text-danger">Đăng nhập</strong>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>
               
            </div>
        </div>

    </section >



    );
}

export default Header; 