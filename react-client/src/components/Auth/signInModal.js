import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import './auth.scss';

export const SignInModal = ({showHide, showHideRef, openSignUpRef}) =>{
    debugger
    const handleChange =()=>{

    }

    return(
        <Modal show={showHide} onHide={()=>showHideRef()} id="signInModal">
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form >
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

