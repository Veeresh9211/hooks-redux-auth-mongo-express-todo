import React,{useState} from 'react';
import {Toast} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import './dataLoader.scss';


function Notification(props){
    const notify = useSelector(state => state.notificationR.notify)
    const dispatch = useDispatch();
    const closeNotification = () => dispatch({type: 'END_NOTIFICATION',payload: false});

    return(
        <Toast  show={notify} onClose={closeNotification}  style={{position: "fixed",left: "48%",top: "45%",transform: "translate(-50%, -50%)",zIndex: "999",width: "21%","backdropFilter": "none"}}>
        {/* <Toast show={notify} onClose={closeNotification}>  */}
            
            <Toast.Header style={{    backgroundColor: "lightgreen"}}>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>{props.data}</Toast.Body>
        </Toast>

    )
}

export default Notification;