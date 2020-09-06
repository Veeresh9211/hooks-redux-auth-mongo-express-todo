import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import './auth.scss';

const LogOutSuccessModal = ({showHide, showHideRef, userName}) =>{

    return(
        <Modal show={showHide} onHide={()=>showHideRef()} id="loginSuccessModal">
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                You've successfully signed out. Thank you!!.
            </p>
        </Modal.Body>
      </Modal>
    )
}

export default LogOutSuccessModal;
