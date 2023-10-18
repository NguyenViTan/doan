// import { useEffect, useState} from "react";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//    const [email,setEmail]=useState("");
//    const [password,setPassword]=useState("");
//    const navigate = useNavigate();
 
// async function login(){
//     console.warn(email,password)
//     let item=(email,password);
//     let result=await fetch("http://localhost/vitannguyen/public/api/user/store",{
//         method:'POST',
//         headers:{
//             "Content-Type":"application/json",
//             "Accept":"application/json"
//         },
//         body:JSON.stringify(item)
//     });
//     result=await result.json();
//     localStorage.setItem("user-info",JSON.stringify(result))
//     navigate('/', { replace: true })
// }
//     return (
//         <section class="section-conten padding-y" style={{minHeight:84}}>


//         <div class="card mx-auto" style={{maxWidth: 380, marginTop:100}}>
//           <div class="card-body">
//           <h4 class="card-title mb-4">Đăng nhập</h4>
//           <form onSubmit={login}>
//                 <a href="#" class="btn text-white bg-secondary btn-block mb-2"> <i class="fab fa-facebook-f"></i>  Đăng ký bằng facebook</a>
//                 <a href="#" class="btn btn-google btn-block mb-4 text-white bg-danger"> <i class="fab fa-google"></i>   Đăng nhập với google </a>
//               <div class="form-group">
//                  <input name="" class="form-control" placeholder="Username" type="text"/>
//               </div> 
//               <div class="form-group">
//                 <input name="" class="form-control my-3" placeholder="Password" type="password"/>
//               </div> 
              
//               <div class="form-group">
//                   <a href="#" class="float-right">Forgot password?</a> 
//                 <label class="float-left custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" checked=""/> <div class="custom-control-label"> Remember </div> </label>
//               </div> 
//               <div class="form-group">
//                   <button type="submit" class="btn btn-primary btn-block my-3"> Đăng nhập  </button>
//               </div>    
//           </form>
//           </div> 
//         </div>
    
//          <p class="text-center mt-4">Chưa có tài khoản? <a  className="text-danger"href="/register">Đăng ký</a></p>
//          <br/><br/>
    
    
    
//     </section>
//     );
// }
// export default Login;

import { Link, useNavigate } from "react-router-dom";
import "../Login/style.css";
import { useState } from "react";
import userservices from "../../../services/UserService";
function Login() {
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function Login(event) {
        event.preventDefault();
        const user = new FormData();
        user.append("email", email);
        user.append("password", password);

        await userservices.Login(user).then(function (result) {
            if (result.data.success === true) {
                alert(result.data.message);
                navigate('/', { replace: true });
            }
            else {
                alert(result.data.message);
                navigate('/pages/login', { replace: true });
            }

        })
    }
    return (
        <section class="section-conten padding-y" style={{minHeight:84}}>


        <div class="card mx-auto" style={{maxWidth: 380, marginTop:100}}>
          <div class="card-body">
          <h4 class="card-title mb-4">Đăng nhập</h4>
          <form class="form"  method="" action="" onSubmit={Login}>
                <a href="#" class="btn text-white bg-secondary btn-block mb-2"> <i class="fab fa-facebook-f"></i>  Đăng ký bằng facebook</a>
                <a href="#" class="btn btn-google btn-block mb-4 text-white bg-danger"> <i class="fab fa-google"></i>   Đăng nhập với google </a>
              <div class="form-group">
                 <input name="" class="form-control" placeholder="Username" type="text"/>
              </div> 
              <div class="form-group">
                <input name="" class="form-control my-3" placeholder="Password" type="password"/>
              </div> 
              
              {/* <div class="form-group">
                  <a href="#" class="float-right ">Forgot password?</a> 
                <label class="float-left custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" checked=""/> <div class="custom-control-label"> Remember </div> </label>
              </div>  */}
              <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block my-3"> Đăng nhập  </button>
              </div>    
          </form>
          </div> 
        </div>
    
         <p class="text-center mt-4">Chưa có tài khoản? <a  className="text-danger"href="/register">Đăng ký</a></p>
         <br/><br/>
    
    
    
    </section>
    );
}

export default Login;