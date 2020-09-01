import React, {useState, useEffect} from 'react';
import {Modal, Button, Toast} from 'react-bootstrap';
import {connect} from 'react-redux';
import {DeleteLaptop} from '../../store/actions/laptopAction';
import './laptops.scss';

const DeleteLaptopModal = ({showHide, hideShowHandler, laptopDetails, DeleteLaptop, laptopDeleteStatus}) =>{

    const [show, setShow] = useState(false);
    const deleteLaptopLocal =() =>{
        DeleteLaptop(laptopDetails._id);
        hideShowHandler();
    }
    let deleteMsg = "";

    useEffect(()=>{
        if(laptopDeleteStatus === 200){
            setShow(true);
        }
    },[laptopDeleteStatus]);

    if(laptopDeleteStatus === 200){
        deleteMsg = <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                        <Toast.Body>Successfully Deleted</Toast.Body>
                    </Toast>
    }
    return(
        <React.Fragment>
            {deleteMsg}
            <Modal show={showHide} id="deleteLaptopModal" onHide={()=>hideShowHandler()}>
                <h4>Are you sure you want to delete - {laptopDetails.brand} ? </h4>
                <div className="buttonsModal">
                    <Button variant="secondary" onClick={()=>hideShowHandler()}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={()=>deleteLaptopLocal()}>
                        Confirm
                    </Button>
                </div>
            </Modal>
        </React.Fragment>
    )
}

const mapStateToProps = (state) =>{
    return{
        laptopDetails: state.laptop.laptopDetails,
        laptopDeleteStatus: state.laptop.laptopDeleteStatus
    }
}
export default connect(mapStateToProps,{DeleteLaptop})(DeleteLaptopModal);