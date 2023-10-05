import React from "react";
const Login=()=>(
    <section class="section-conten padding-y" style={{minHeight:84}}>


	<div class="card mx-auto" style={{maxWidth: 380, marginTop:100}}>
      <div class="card-body">
      <h4 class="card-title mb-4 text-center">Đăng nhập</h4>
      <form>
        <div className="row">
            <div className="col-6">
            <a href="#" class="btn text-white bg-secondary btn-block mb-2"> <i class="fab fa-facebook-f"></i>  Đăng ký bằng facebook</a>
            </div>
            <div className="col-6">
            <a href="#" class="btn btn-google btn-block mb-4 text-white bg-danger"> <i class="fab fa-google"></i>   Đăng nhập với google </a>
            </div>
        </div>
      	 
      	 
          <div class="form-group">
			 <input name="" class="form-control mb-4" placeholder="Username" type="text"/>
          </div> 
          <div class="form-group">
			<input name="" class="form-control" placeholder="Password" type="password"/>
          </div> 
          
          <div class="form-group">
          	<a href="#" class="float-right ">Forgot password?</a> 
            <label class="float-left custom-control custom-checkbox mb-3 "> <input type="checkbox" class="custom-control-input" checked=""/> <div class="custom-control-label"> Remember </div> </label>
          </div> 
          <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block mb-3"> Đăng nhập  </button>
          </div>    
      </form>
      </div> 
    </div>

     <p class="text-center mt-4">Chưa có tài khoản? <a  className="text-danger"href="/register">Đăng ký</a></p>
     <br/><br/>



</section>
);
export default Login;