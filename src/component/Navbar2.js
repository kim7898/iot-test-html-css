import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


class Navbar2 extends React.Component{
 

  render(){

    return(
  
    
        <div className="nav2">
    
                     
        <div className="calling"> <button><i class="material-icons">&#xe61d;</i></button></div>  
        <div class="d-inline-flex  nav2-lists">
            <button><i class='fas fa-pause'></i></button>
            <button><i class="fas fa-microphone"></i></button>
            <button><i class="fas fa-user-check"></i></button>

            <button><i class="fas fa-phone-volume"></i></button>
            <button><i class="fas fa-phone-slash"></i></button>
        </div>
        <div className="shut" >   <button ><i class='fas fa-phone-slash'></i></button></div> 
      
        </div>
        


    )
  }
  
}

export default Navbar2;