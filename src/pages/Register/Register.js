import React from "react";
const Register =()=>(
    <section class="section-content padding-y">


	<div class="card mx-auto" style={{maxWidth:'520px', marginTop:'40px'}}>
      <article class="card-body">
		<header class="mb-4"><h4 class="card-title text-center">Đăng ký</h4></header>
		<form>
				<div class="form-row">
					<div class="col form-group">
						<label>Họ tên</label>
					  	<input type="text" class="form-control" placeholder="Nhập  họ ..."/>
					</div> 
					<div class="col form-group">
						<label>Tên</label>
					  	<input type="text" class="form-control" placeholder="Nhập tên..."/>
					</div> 
				</div> 
				<div class="form-group">
					<label>Email</label>
					<input type="email" class="form-control" placeholder="Nhập email..."/>
					<small class="form-text text-muted">Tôi sẽ không bao giờ chia sẻ email cho ai.</small>
				</div>
				<div class="form-group">
					<label class="custom-control custom-radio custom-control-inline my-3">
					  <input class="custom-control-input " type="radio" name="gender" value="option1"/>
					  <span class="custom-control-label "> Nam </span>
					</label>
					<label class="custom-control custom-radio custom-control-inline">
					  <input class="custom-control-input" type="radio" name="gender" value="option2"/>
					  <span class="custom-control-label"> Nữ </span>
					</label>
				</div> 
				<div class="form-row">
					<div class="form-group col-md-6">
					  <label>Thành phố</label>
					  <input type="text" class="form-control"/>
					</div> 
					<div class="form-group col-md-6">
					  <label>Đất nước</label>
					  <select id="inputState" class="form-control">
					    <option> Choose...</option>
					      <option>Uzbekistan</option>
					      <option>Russia</option>
					      <option selected="">United States</option>
					      <option>India</option>
					      <option>Afganistan</option>
					  </select>
					</div>
				</div> 
				<div class="form-row">
					<div class="form-group col-md-6">
						<label>Tạo mật khẩu</label>
					    <input class="form-control" type="password"/>
					</div> 
					<div class="form-group col-md-6">
						<label>Nhập lại mật khẩu</label>
					    <input class="form-control" type="password"/>
					</div>  
				</div>
			    <div class="form-group py-3">
			        <button type="submit" class="btn btn-primary btn-block"> Đăng ký  </button>
			    </div>      
			    <div class="form-group"> 
		            <label class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" /> <div class="custom-control-label">Tôi đồng ý với <a href="#"> các điều khoản và điều kiện</a>  </div> </label>
		        </div>          
			</form>
		</article>
    </div>
    <p class="text-center mt-4">Đã có tài khoản <a  className="text-danger" href="/login"> Đăng nhập</a></p>
    <br/><br/>



</section>

);
export default Register;