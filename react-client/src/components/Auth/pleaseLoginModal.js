import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import './auth.scss';

const PleaseLoginModal = ({showHide, hideShowHandler, openAddHandler}) =>{

    return(
        <Modal show={showHide} onHide={()=>hideShowHandler()} id="pleaseLoginModal">
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                <b>Please sign into access this resource.</b>
            </p>
        </Modal.Body>
      </Modal>
    )
}

export default PleaseLoginModal;
