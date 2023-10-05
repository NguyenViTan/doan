import { Link } from "react-router-dom";

function Footer() {
    return (<footer class="text-center text-lg-start bg-dark text-danger ">

    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

      <div class="me-5 d-none d-lg-block">
        <span className="fs-2">Kênh xe máy chính hãng 100% cam kết chất lượn bảo hành trọn đời</span>
      </div>
 
  
  
      <div>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-github"></i>
        </a>
      </div>
   
    </section>

  

    <section class="">
      <div class="container text-center text-md-start mt-5">

        <div class="row mt-3">

          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <h6 class="text-danger fw-bold mb-4">
              <i class="fas fa-gem me-3 text-danger "></i>Hãng xe HALUAUTO
            </h6>
            <p>
             Sự hài lòng của của quý khách là niềm tin là vinh dự cho tập đoàn chúng tôi
            </p>
          </div>


          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
 
            <h6 class="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="http://localhost:3000/thuong-hieu/honda" class="text-danger">HONDA</a>
            </p>
            <p>
              <a href="http://localhost:3000/thuong-hieu/yamaha" class="text-danger">YAMAHA</a>
            </p>
            <p>
              <a href="http://localhost:3000/danh-muc-san-pham/sirius" class="text-danger">SIRIUS</a>
            </p>
            <p>
              <a href="http://localhost:3000/danh-muc-san-pham/xe-sh" class="text-danger">SH</a>
            </p>
           
          </div>
 
  
    
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
     
            <h6 class="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="gioi-thieu" class="text-danger">Gioi thieu</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </div>
      
  
    
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> Xe máy HALUAUTO</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
          vitan@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
  
        </div>

      </div>
    </section>
   

    <div class="text-center p-4" >
      © 2023
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Nguyễn Vi Tân</a>
    </div>

  </footer>

    )
}

export default Footer; 