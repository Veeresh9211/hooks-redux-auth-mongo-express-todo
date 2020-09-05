import React,{useState, useEffect} from 'react';
import './navbar.scss';
import 'font-awesome/css/font-awesome.min.css';
import SignInModal from '../Auth/signInModal';
import SignUpModal from '../Auth/signUpModal';
import LoginSuccessModal from '../Auth/loginSuccess';
import {ClearRegistrationValues} from '../../store/actions/authAction';
import {connect} from 'react-redux';

const NavBar=({registrationStatus, registrationStatusMessage, ClearRegistrationValues, loginStatus, userName})=>{

    const [showSignIn, setshowSignIn] = useState(false);
    const [showSignUp, setshowSignUp] = useState(false);
    const [showLoginSucess, setshowLoginSucess] = useState(false);

    const openSignInModal =(otherWindow)=>{
      if(otherWindow === undefined){ClearRegistrationValues();}
      setshowSignIn(!showSignIn);
      if(otherWindow === true)
      {
        setshowSignUp(!showSignUp);
      }
    }

    const openSignUpModal =(otherWindow)=>{
      ClearRegistrationValues();
      setshowSignUp(!showSignUp);
      if(otherWindow === true)
      {
        setshowSignIn(!showSignIn);
      }

    }

    const closeLoginSuccessModal =()=>{
      setshowLoginSucess(false);
    }

    useEffect(()=>{
      if(registrationStatus === true){
        openSignInModal(true); // on success full registration show login modal.
      }
      if(loginStatus === true){
        setshowSignIn(false);
        setshowLoginSucess(true);
      }
    },[registrationStatus, loginStatus])

    return(
      <div className="customNavbar">
        <div className="homeIcon">
          <i className="fa fa-th customsize" aria-hidden="true"></i>
        </div>
        <div className="homeLabel">
          <h5>DashBoard</h5>
        </div>
        {loginStatus && <div className="nameActions">
            <p>{userName}</p>
            <div className="buttons"> 
              <button className="btn"><i className="fa fa-user" aria-hidden="true"></i></button>
              <button className="btn"><i className="fa fa-sign-out" aria-hidden="true"></i></button>
            </div>
        </div>
        }
        {!loginStatus && <div className="nameActions">
            <p>&nbsp;</p>
            <div className="buttons"> 
              <button className="signIn" onClick={()=>openSignInModal()}>Sign In</button>
              <button className="signUp" onClick={()=>openSignUpModal()}>Sign Up</button>
            </div>
        </div>
        }

        <SignInModal showHide={showSignIn} showHideRef={openSignInModal} openSignUpRef={openSignUpModal} regStatus={registrationStatus} regStatusMsg={registrationStatusMessage}/>
        <SignUpModal showHide={showSignUp} showHideRef={openSignUpModal} openSignInRef={openSignInModal} regStatus={registrationStatus} regStatusMsg={registrationStatusMessage}/>
        <LoginSuccessModal showHide={showLoginSucess} showHideRef={closeLoginSuccessModal} userName={userName}/>
      </div>
       
    )
}
const mapStateToProps =(state)=>{
  return{
      registrationStatus: state.authR.registrationStatus,
      registrationStatusMessage: state.authR.registrationStatusMessage,
      loginStatus: state.authR.loginStatus,
      loginStatusMessage: state.authR.loginStatusMessage,
      userName: state.authR.userName
  }
}

export default connect(mapStateToProps,{ClearRegistrationValues})(NavBar);