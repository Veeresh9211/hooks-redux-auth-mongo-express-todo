import React from 'react';
import {Modal, ModalFooter} from 'react-bootstrap';
import {connect} from 'react-redux';
import {UserLogout} from '../../store/actions/authAction';
import './auth.scss';

const LogOutModal = ({showHide, showHideRef, UserLogout, userName}) =>{

    const Logout = (e)=>{
        UserLogout();
        showHideRef();
        e.preventDefault();
    }
    return(
        <Modal show={showHide} onHide={()=>showHideRef()} id="logOutModal">
        <Modal.Header closeButton>
          <Modal.Title>Hey, {userName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                Do you want to logout?
            </p>
        </Modal.Body>
        <ModalFooter>
            <button className="cancel" onClick={()=>showHideRef()}>Cancel</button>
            <button  className="confirm" onClick={(e)=>Logout(e)}>Logout</button>
        </ModalFooter>
      </Modal>
    )
}

export default connect(null,{UserLogout})(LogOutModal);
