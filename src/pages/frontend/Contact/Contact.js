<pnk rel="stylesheet" href="assets/layout/style.css" />;
function Contact() {
    return (
        <section class="policy my-4">
            <div class="wrap-breadcrumb">
                <div class="clearfix container">
                    <div class="row main-header">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">

                <div class="ContentMee fs-1 text-info">
                    <marquee vspace="1%" hspace="20%" scrollamount="12" onmouseover="this.stop()" onmouseout="this.start()">
                        KHÁCH HÀNG LÀ THƯỢNG ĐẾ
                    </marquee>
                </div>
                <div id="contact" class="w3-content">
                    <h1 class="section-head text-center text-primary">Liên hệ chúng tôi</h1>
                    <h5 class="section-head text-center">Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</h5>

                </div>

                <div class="container text-center my-3">
                    <div class="row">
                        <div class="col">
                            <div class="infor-content">
                                <ul>
                                    <p><i class="icontent ti-location-pin "> </i>Xe máy chính hãng nhập khẩu từ nước ngoài</p>
                                    <p><i class="icontent ti-hand-open"></i> Phone: +84914882582</p>
                                    <p> <i class="icontent ti-email"></i> Email: vitanxemay@mail.com</p>
                                    <p> <i class="icontent ti-email"></i> Địa chỉ: 20 Tăng Nhơn Phú P.Bến Thành Quận 9</p>
                                </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container ">
                                <h4 class='text-primary'>Thông tin khách hàng</h4>
                                <form>
                                    <div class="form-group ">
                                        <label for="hoten">Họ tên:</label>
                                        <input type="hoten" class="form-control   " id="hten" placeholder="Nhập họ tên" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input type="email" class="form-control " id="email" placeholder="Enter email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="sdt">Số điện thoại:</label>
                                        <input type="sdt" class="form-control " id="sdtt" placeholder="SĐT" />
                                    </div>

                                    <div class="form-group">
                                        <label for="pwd">Tiêu đề:</label>
                                        <input type="password" class="form-control" id="pwd" placeholder="Nhập tiêu đề" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Comment:</label>
                                        <input type="password" class="form-control " id="pwd" placeholder="Enter..." />
                                    </div>
                                    <div class="checkbox">
                                        <label><input type="checkbox" /> Remember me</label>
                                    </div>
                                    <button type="button" class="btn btn-info btn-primary" data-toggle="modal" data-target="#myModal">Submit</button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>






            </div>
            <div className="map-content text-center ">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746707153127!2d106.77242407389022!3d10.830685758192878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526ffdc466379%3A0x89b09531e82960d!2zMjAgxJDGsOG7nW5nIFTEg25nIE5oxqFuIFBow7osIFBoxrDhu5tjIExvbmcgQiwgUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1688047507315!5m2!1svi!2s" style={{width:1300, height:500, margin:10}} ></iframe>
            </div>
        </section>
    );
}
export default Contact;