import React , {Component} from 'react';
import LoginForm from '../component/LoginForm';


class Page1 extends Component { 

   
  
      render (){  
         

    return (
        <div className="page1" >

            <img alt="logo" className="logo" src="https://upload.wikimedia.org/wikipedia/vi/thumb/e/e8/Logo_Viettel.svg/800px-Logo_Viettel.svg.png"/>
            <select className="form-control selcls"> 
                <option value="volvo">Volvo</option>
                
                <option value="viet" selected>Tiếng việt </option>
            </select>
            <div className="col-12">
            <LoginForm/></div>
    
       </div>
       
   
    );
}
}

export default Page1;