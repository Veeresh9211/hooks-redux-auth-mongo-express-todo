import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './laptops.scss';
const ViewLaptopDetails = ({showHide, hideShowHandler, laptopDetails}) =>{
 
    return(
        <Modal show={showHide} onHide={()=>hideShowHandler()}>
         <div className="latopDetails">
             <div className="laptopBrandName">
                <h3>Brand - {laptopDetails.brand}</h3>
             </div>
             <div className="moreDetails">
                 <div className="oneItem">
                     <label>Processor</label>
                     <p>{laptopDetails.processor}</p>
                 </div>
                 <div className="oneItem">
                     <label>Processor Generation</label>
                     <p>{laptopDetails.processorGeneration}</p>
                 </div> <div className="oneItem">
                     <label>Screen Size</label>
                     <p>{laptopDetails.screenSize}</p>
                 </div>
                 <div className="oneItem">
                     <label>Operating System</label>
                     <p>{laptopDetails.operatingSystem}</p>
                 </div>
                 <div className="oneItem">
                     <label>Graphics Card</label>
                     <p>{laptopDetails.graphicsCard}</p>
                 </div>

                 <div className="oneItem">
                     <label>Hard Disk</label>
                     <p>{laptopDetails.hardDisk}</p>
                 </div>
                 <div className="oneItem">
                     <label>Ram</label>
                     <p>{laptopDetails.ram}</p>
                 </div>
                 <div className="oneItem">
                     <label>Storage Type</label>
                     <p>{laptopDetails.storageType}</p>
                 </div>
                 <div className="oneItem">
                     <label>Price</label>
                     <p>{laptopDetails.price}</p>
                 </div>
                 <div className="oneItem">
                     <label>Processor Brand</label>
                     <p>{laptopDetails.processorBrand}</p>
                 </div>
                 <div className="oneItem">
                     <label>Touch Screen</label>
                     <p>{laptopDetails.touchScreen === "on" ? "Yes" : "No"}</p>
                 </div>
             </div>
             <button className="btn closeDetails" onClick={()=>hideShowHandler()}>Close</button>
         </div>
        </Modal>
    )
}

const mapStateToProps = (state) =>{
    return{
        laptopDetails: state.laptop.laptopDetails
    }
}
export default connect(mapStateToProps)(ViewLaptopDetails);