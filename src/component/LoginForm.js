import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


class LoginForm extends React.Component{
 

  render(){

    return(
        <div className="container" className="login-form" >
        <div className="d-flex flex-column  ">
            <div className=" d-flex justify-content-center text"><div className="col-3"> HỆ THỐNG  CONTACT CENTER VIETTEL GLOBAL </div></div>
            <div className="d-flex justify-content-center h-100"><div className="card">
              

                    <h1>ĐĂNG NHẬP</h1>
                    
                <div className="card-body">
                    <form>
                     
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" className="submit" >ĐĂNG NHẬP</button>

                    </form>
                </div>
                
                  
                    <div className="d-flex justify-content-center">
                        <a href="/" className="forgot-pass">quên mật khẩu ? </a>
                   
                </div></div>
            </div>
        </div>
    </div>

    )
  }
  
}

export default LoginForm;