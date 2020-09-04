import React,{useState, useEffect} from 'react';
import './navbar.scss';
import 'font-awesome/css/font-awesome.min.css';
import SignInModal from '../Auth/signInModal';
import SignUpModal from '../Auth/signUpModal';
import {connect} from 'react-redux';

const NavBar=({registrationStatus, registrationStatusMessage})=>{

    const [showSignIn, setshowSignIn] = useState(false);
    const [showSignUp, setshowSignUp] = useState(false);

    const openSignInModal =(otherWindow)=>{
      setshowSignIn(!showSignIn);
      if(otherWindow === true)
      {
        setshowSignUp(!showSignUp);
      }
    }

    const openSignUpModal =(otherWindow)=>{
      setshowSignUp(!showSignUp);
      if(otherWindow === true)
      {
        setshowSignIn(!showSignIn);
      }

    }

    useEffect(()=>{
      if(registrationStatus === true){
        openSignInModal(true);
      }
    },[registrationStatus])

    return(
      <div className="customNavbar">
        <div className="homeIcon">
          <i className="fa fa-th customsize" aria-hidden="true"></i>
        </div>
        <div className="homeLabel">
          <h5>DashBoard</h5>
        </div>
        {false && <div className="nameActions">
            <p>Veereshrer</p>
            <div className="buttons"> 
              <button className="btn"><i className="fa fa-user" aria-hidden="true"></i></button>
              <button className="btn"><i className="fa fa-sign-out" aria-hidden="true"></i></button>
            </div>
        </div>
        }
        {true && <div className="nameActions">
            <p>&nbsp;</p>
            <div className="buttons"> 
              <button className="signIn" onClick={()=>openSignInModal()}>Sign In</button>
              <button className="signUp" onClick={()=>openSignUpModal()}>Sign Up</button>
            </div>
        </div>
        }

        <SignInModal showHide={showSignIn} showHideRef={openSignInModal} openSignUpRef={openSignUpModal} regStatus={registrationStatus} regStatusMsg={registrationStatusMessage}/>
        <SignUpModal showHide={showSignUp} showHideRef={openSignUpModal} openSignInRef={openSignInModal}/>
      </div>
       
    )
}
const mapStateToProps =(state)=>{
  return{
      registrationStatus: state.authR.registrationStatus,
      registrationStatusMessage: state.authR.registrationStatusMessage
  }
}

export default connect(mapStateToProps)(NavBar);