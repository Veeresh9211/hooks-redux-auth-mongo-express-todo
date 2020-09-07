import React,{useState, useEffect} from 'react';
import './navbar.scss';
import 'font-awesome/css/font-awesome.min.css';
import SignInModal from '../Auth/signInModal';
import SignUpModal from '../Auth/signUpModal';
import LogOutModal from '../Auth/logOutModal';
import LoginSuccessModal from '../Auth/loginSuccess';
import LogOutSuccessModal from '../Auth/logoutSuccessModal';
import {ClearRegistrationValues} from '../../store/actions/authAction';
import {connect} from 'react-redux';

const NavBar=({registrationStatus, registrationStatusMessage, sessionExpired, sessionExpiredMessage, ClearRegistrationValues, loginStatus, userName, showLoginSuccessModal, loginStatusErrorMessage, logoutStatus})=>{

    const [showSignIn, setshowSignIn] = useState(false);
    const [showSignUp, setshowSignUp] = useState(false);
    const [showLoginSucess, setshowLoginSucess] = useState(false);
    const [showLogOut, setshowLogOut] = useState(false);
    const [showLogOutSucess, setshowLogOutSucess] = useState(false);

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

    const openLogOutModal =(otherWindow)=>{
      setshowLogOut(!showLogOut)
    }

    const closeLoginSuccessModal =()=>{
      setshowLoginSucess(false);
    }

    const closeLogOutSuccessModal =()=>{
      setshowLogOutSucess(false);
    }

    useEffect(()=>{
      debugger
      if(registrationStatus === true){
        openSignInModal(true); // on success full registration show login modal.
      }
      if(loginStatus === true){
        setshowSignIn(false);
      }

      if(showLoginSuccessModal === true){
        setshowLoginSucess(true);
      }

      if(sessionExpired === true){
        setshowSignIn(true);
      }

      if(logoutStatus === true){
        setshowLogOutSucess(true);
      }
    },[registrationStatus, loginStatus, showLoginSuccessModal, sessionExpired, logoutStatus])

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
              <button className="btn" onClick={()=>openLogOutModal()}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
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

        <SignInModal loginStatusErrorMessage={loginStatusErrorMessage} sessionExpiredMessage={sessionExpiredMessage} showHide={showSignIn} showHideRef={openSignInModal} openSignUpRef={openSignUpModal} regStatus={registrationStatus} regStatusMsg={registrationStatusMessage} loginStatus={loginStatus}/>
        <SignUpModal showHide={showSignUp} showHideRef={openSignUpModal} openSignInRef={openSignInModal} regStatus={registrationStatus} regStatusMsg={registrationStatusMessage}/>
        <LoginSuccessModal showHide={showLoginSucess} showHideRef={closeLoginSuccessModal} userName={userName}/>
        <LogOutModal showHide={showLogOut}  showHideRef={openLogOutModal}  userName={userName}/>
        <LogOutSuccessModal showHide={showLogOutSucess}  showHideRef={closeLogOutSuccessModal}/>
      </div>
       
    )
}
const mapStateToProps =(state)=>{
  return{
      registrationStatus: state.authR.registrationStatus,
      registrationStatusMessage: state.authR.registrationStatusMessage,
      loginStatus: state.authR.loginStatus,
      loginStatusMessage: state.authR.loginStatusMessage,
      userName: state.authR.userName,
      showLoginSuccessModal: state.authR.showLoginSuccessModal,
      sessionExpired: state.authR.sessionExpired,
      sessionExpiredMessage: state.authR.sessionExpiredMessage,
      loginStatusErrorMessage: state.authR.loginStatusErrorMessage,
      logoutStatus: state.authR.logoutStatus
  }
}

export default connect(mapStateToProps,{ClearRegistrationValues})(NavBar);