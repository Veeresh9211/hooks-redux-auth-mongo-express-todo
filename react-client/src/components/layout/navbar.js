import React from 'react';
import './navbar.scss';
import 'font-awesome/css/font-awesome.min.css';
const navBar=()=>{
    return(
      <div className="customNavbar">
        <div className="homeIcon">
          <i className="fa fa-th customsize" aria-hidden="true"></i>
        </div>
        <div className="homeLabel">
          <h5>DashBoard</h5>
        </div>
        <div className="nameActions">
            <p>Veeresh R Yadavannavar</p>
            <div className="buttons"> 
              <button className="btn"><i className="fa fa-user" aria-hidden="true"></i></button>
              <button className="btn"><i className="fa fa-sign-out" aria-hidden="true"></i></button>
            </div>
        </div>
      </div>
       
    )
}

export default navBar;