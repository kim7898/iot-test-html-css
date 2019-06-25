import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


class Navbar extends React.Component {


  render() {

    return (
      <div class="d-flex justify-content-end bg">
        <i class="fas fa-bars"></i>

        <div class="p-2 bg-img">
          <img src="http://hanoimoi.com.vn/Uploads/anhthu/2019/5/10/david_beckham.jpg" alt="Avatar" class="avatar"></img>

        </div>
        <div class="p-2 bg-text">
          <p>Administator</p>
          <p>Ready</p>

        </div>

        <div class="p-2 bg-stt"><i class="fas fa-wifi"></i>    chanel status</div>
      </div>


    )
  }

}

export default Navbar;