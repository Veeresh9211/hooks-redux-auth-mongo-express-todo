import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import {UserLogin} from '../../store/actions/authAction';
import {connect} from 'react-redux';
import './auth.scss';

const SignInModal = ({showHide, showHideRef, openSignUpRef, regStatus, regStatusMsg, UserLogin}) =>{

    const [userRecord, setUserRecord] = useState(null);
    
    const handleChange =(e)=>{
        setUserRecord({...userRecord,[e.currentTarget.name]:e.currentTarget.value});
    }

    const login =(e)=>{
        UserLogin(userRecord);
        e.preventDefault();
    }

    return(
        <Modal show={showHide} onHide={()=>showHideRef()} id="signInModal">
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {regStatus && <p className="regSuccessMsg">{regStatusMsg}</p>}
            <form onSubmit={(e)=>login(e)}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e)=>handleChange(e)} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>handleChange(e)} name="password" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="btn">Sign In</button>
                <p className="forgot-password text-right">Forgot password?</p>
                <p className="text-center">Need an account? <a onClick={(other)=>openSignUpRef(true)}>Sign up</a></p>
            </form>
        </Modal.Body>
      </Modal>
    )
}

export default connect(null,{UserLogin})(SignInModal);
