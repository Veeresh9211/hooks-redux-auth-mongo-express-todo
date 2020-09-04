import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import './auth.scss';

export const SignUpModal = ({showHide, showHideRef, openSignInRef}) =>{

    const handleChange =()=>{

    }

    return(
        <Modal show={showHide} onHide={()=>showHideRef()} id="signInModal">
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form >
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

