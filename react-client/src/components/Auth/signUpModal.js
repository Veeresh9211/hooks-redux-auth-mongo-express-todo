import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import {UserRegistration, ClearRegistrationValues} from '../../store/actions/authAction';
import './auth.scss';
import {connect} from 'react-redux';

const SignUpModal = ({showHide, showHideRef, openSignInRef, UserRegistration, regStatus, regStatusMsg, ClearRegistrationValues}) =>{

    const [userRecord, setUserRecord] = useState({});
    const handleChange =(e)=>{
        ClearRegistrationValues();
        setUserRecord({...userRecord,[e.currentTarget.name]:e.currentTarget.value})
    }

    const register = (e)=>{
        UserRegistration(userRecord);
        e.preventDefault();
    }
    return(
        <Modal show={showHide} onHide={()=>showHideRef()} id="signInModal">
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {!regStatus && <p className="errorMessage">{regStatusMsg}</p>}
            <form onSubmit={(e)=>{register(e)}}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="firstName" onChange={(event)=>handleChange(event)} className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" onChange={(event)=>handleChange(event)} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={(event)=>handleChange(event)} className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={(event)=>handleChange(event)} className="form-control" placeholder="Confirm Password"/>
                </div>
                <button type="submit" className="btn">Sign Up</button>
                <p className="text-right">Already Registered?&nbsp;<a onClick={(other)=>openSignInRef(true)}>Sign in</a></p>
            </form>
        </Modal.Body>
      </Modal>
    )
}


export default connect(null,{UserRegistration, ClearRegistrationValues})(SignUpModal)
