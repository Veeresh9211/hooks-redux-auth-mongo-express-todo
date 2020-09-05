import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import './auth.scss';

const LoginSuccessModal = ({showHide, showHideRef}) =>{

    return(
        <Modal show={showHide} onHide={()=>showHideRef()} id="loginSuccessModal">
        <Modal.Header closeButton>
          <Modal.Title>Welcome, Veeresh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                You've successfully signed in, Hope you have a good time.
            </p>
        </Modal.Body>
      </Modal>
    )
}

export default LoginSuccessModal;
