import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {SaveLaptop, UpdateLaptop} from '../../store/actions/laptopAction';
import {connect} from 'react-redux';
import {ClearLaptopDetails} from '../../store/actions/laptopAction';

const AddModal = ({showHide, hideShowHandler, SaveLaptop, UpdateLaptop, laptopUpdateStatus, label, laptopDetails, laptopSaveStatus, ClearLaptopDetails}) =>{
    const [laptopObject, setLaptopObject] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) =>{
        setErrorMessage("");
        ClearLaptopDetails();
        setLaptopObject({...laptopObject,[e.currentTarget.name]:e.currentTarget.value});
    }

    const submitForm = (e)=>{
        if(laptopObject === null || Object.keys(laptopObject).length < 12){
            setErrorMessage("All fields are mandatory!!!");
            return false;
        }
        if(laptopDetails === ""){
            SaveLaptop(laptopObject);
            setTimeout(function(){ setLaptopObject(""); }, 1000);
        }
        else{
            UpdateLaptop(laptopObject);
        }
        
        e.preventDefault();
    }

    useEffect(()=>{
        if(laptopDetails === ""){
            setLaptopObject(laptopDetails);
        }
        else
        {
            setLaptopObject({...laptopObject,...laptopDetails});

        }
    },[laptopDetails])

    return(
        <Modal show={showHide} onHide={()=>hideShowHandler()}>
                <div className="row">
                    <div className="col-md-3" id="addLaptopActionButtonsDekstop">
                        <h3>{label}</h3>
                        <div className="buttonsModal">
                            <Button variant="secondary" onClick={()=>hideShowHandler()}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={(e)=>submitForm(e)}>
                                {laptopDetails === "" ? "Save Changes" : "Update Changes"}
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {errorMessage !== "" && <p className="errorMessage">{errorMessage}</p>}
                        {laptopSaveStatus === 200 && <p className="errorMessage">New Laptop details added :-)</p>}
                        {laptopUpdateStatus === 200 && <p className="errorMessage">Laptop Configuration updated :-)</p>}
                        <form>
                            <h4 id="mobileLabelOnly">{label}</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label>Brand</label>
                                        <input type="text" name="brand" value={laptopObject && laptopObject.brand} onChange={(e)=>handleChange(e)} class="form-control" placeholder="Enter Brand" required/>
                                    </div>
                                    <div class="form-group">
                                        <label>Processor</label>
                                        <select class="form-control" value={laptopObject && laptopObject.processor} name="processor" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select Processor--</option>
                                            <option value="Core i9">Core i9</option>
                                            <option value="Core i5">Core i5</option>
                                            <option value="Core i7">Core i7</option>
                                            <option value="Ryzen 5 Quad Core">Ryzen 5 Quad Core</option>
                                            <option value="Ryzen 7 Quad Core">Ryzen 7 Quad Core</option>
                                            <option value="Pentium Dual Core">Pentium Dual Core</option>
                                            
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Processor Generation</label>
                                        <select class="form-control" value={laptopObject && laptopObject.processorGeneration} name="processorGeneration" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select Generation--</option>
                                            <option value="10th Generation">10th Gen</option>
                                            <option value="9th Generation">9th Gen</option>
                                            <option value="8th Generation">8th Gen</option>
                                            <option value="5th Generation">5th Gen</option>
                                            <option value="4th Generation">4th Gen</option>
                                            <option value="3rd Generation">3rd Gen</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Processor Brand</label>
                                        <select class="form-control" value={laptopObject && laptopObject.processorBrand} name="processorBrand" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select Brand--</option>
                                            <option value="Intel">Intel</option>
                                            <option value="AMD">AMD</option>
                                            <option value="Microsoft">Microsoft</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Screen Size</label>
                                        <select class="form-control" value={laptopObject && laptopObject.screenSize} name="screenSize" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select screen size--</option>
                                            <option value="14 inch - 14.9 inch">14 inch - 14.9 inch</option>
                                            <option value="15 inch - 15.9 inch">15 inch - 15.9 inch</option>
                                            <option value="15 inch - 15.9 inch">15 inch - 15.9 inch</option>
                                            <option value="13 inch - 13.9 inch">13 inch - 13.9 inch</option>
                                            <option value="Below 12 inch">Below 12 inch</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Operating System</label>
                                        <select class="form-control" value={laptopObject && laptopObject.operatingSystem} name="operatingSystem" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select OS--</option>
                                            <option value="Windows 10">Windows 10</option>
                                            <option value="Windows 8">Windows 8</option>
                                            <option value="DOS">DOS</option>
                                            <option value="Mac OS">Mac OS</option>
                                        </select>
                                    </div>
                                </div>{/* end for col-md-6 */}
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label>Graphics Card</label>
                                        <select class="form-control" value={laptopObject && laptopObject.graphicsCard} name="graphicsCard" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select graphics memory--</option>
                                            <option value="256 MB">256 MB</option>
                                            <option value="512 MB">512 MB</option>
                                            <option value="1 GB">1 GB</option>
                                            <option value="2 GB">2 GB</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Hard Disk</label>
                                        <select class="form-control" value={laptopObject && laptopObject.hardDisk} name="hardDisk" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select disk memory--</option>
                                            <option value="250 GB">250 GB</option>
                                            <option value="500 GB">500 GB</option>
                                            <option value="1 TB">1 TB</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Ram</label>
                                        <select class="form-control" value={laptopObject && laptopObject.ram} name="ram" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select RAM memory--</option>
                                            <option value="1 GB">1 GB</option>
                                            <option value="2 GB">2 GB</option>
                                            <option value="4 GB">4 GB</option>
                                            <option value="8 GB">8 GB</option>
                                            <option value="16 GB">16 GB</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Storage Type</label>
                                        <select class="form-control" value={laptopObject && laptopObject.storageType} name="storageType" onChange={(e)=>handleChange(e)} required>
                                            <option value="">--Select storage type--</option>
                                            <option value="SSD">SSD</option>
                                            <option value="HDD">HDD</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Price</label>
                                        <input type="number" value={laptopObject && laptopObject.price} class="form-control" name="price" onChange={(e)=>handleChange(e)} placeholder="Enter Price" required/>
                                    </div>
                                <div class="form-group">   
                                    <label>Touch Screen</label>
                                    <div class="radio">
                                        <label><input type="radio" name="touchScreen" value="on" onChange={(e)=>handleChange(e)} name="touchScreen" checked = {laptopObject && laptopObject.touchScreen === 'on' ? true: false}/>Yes</label>
                                    </div>
                                    <div class="radio">
                                        <label><input type="radio" name="touchScreen" value="off" onChange={(e)=>handleChange(e)} name="touchScreen" checked = {laptopObject && laptopObject.touchScreen === 'off' ? true: false}/>No</label>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>{/* col-md-9 */}
                    <div className="col-md-3" id="addLaptopActionButtonsMobile">
                        <div className="buttonsModal">
                            <Button variant="secondary" onClick={()=>hideShowHandler()}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={(e)=>submitForm(e)}>
                                {laptopDetails === "" ? "Save Changes" : "Update Changes"}
                            </Button>
                        </div>
                    </div>
                </div>{/* end for row */}
        </Modal>
    )
}

const mapStateToProps = (state) =>{
    return{
        laptopSaveStatus: state.laptop.laptopSaveStatus,
        laptopUpdateStatus: state.laptop.laptopUpdateStatus,
        laptopDetails: state.laptop.laptopDetails
    }
}
export default connect(mapStateToProps,{SaveLaptop, UpdateLaptop, ClearLaptopDetails})(AddModal);