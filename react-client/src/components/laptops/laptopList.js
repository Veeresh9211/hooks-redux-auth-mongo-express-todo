import React, { useEffect, useState } from 'react';
import './laptops.scss';
import {connect} from 'react-redux';
import {GetLaptopsList, GetLaptopDetails, ClearLaptopDetails} from '../../store/actions/laptopAction';
import ViewLaptopDetails from './viewLaptopDetails';
import AddModal from './addLaptops';
import DeleteLaptopModal from './deleteLaptop';
import DataLoader from '../dataLoadeNotification/dataLoader';

const Laptops = ({GetLaptopsList, laptops, GetLaptopDetails, ClearLaptopDetails, searchLaptopLists, laptopFilterKeys})=>{

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const openViewModal = (id) =>{
        if(showModal === false){
            GetLaptopDetails(id);
        }
        setShowModal(!showModal);
    }

    const openEditModal = (id) =>{
        if(showEditModal === false){
            ClearLaptopDetails();
            GetLaptopDetails(id);
        }
        setShowEditModal(!showEditModal);
    }

    const openDeleteModal = (id) =>{
        if(showDeleteModal === false){
            ClearLaptopDetails();
            GetLaptopDetails(id);
        }
        setShowDeleteModal(!showDeleteModal);
    }

    useEffect(()=>{
        if(Object.keys(laptopFilterKeys).length == 0){
            GetLaptopsList();
        }
       
    },[0]);

    let laptopsRow = searchLaptopLists && searchLaptopLists.map((val,index)=>{
        return (<tr key={index}>
                    <th scope="row">{val.brand}</th>
                    <td>{val.processor}</td>
                    <td>{val.processorBrand}</td>
                    <td>{val.screenSize}</td>
                    <td>{val.hardDisk}</td>
                    <td>{val.ram}</td>
                    <td>{val.graphicsCard}</td>
                    <td>{val.price}</td>
                    <td style={{padding: "0px"}}>
                        <div className="actionIcons">
                            <div style={{color: "green"}} className="bars">
                                <i  className="fa fa-bars" aria-hidden="true" onClick={()=>openViewModal(val._id)}></i>
                                <p>View</p>
                            </div>
                            <div style={{color: "purple"}} className="pencil">
                                <i className="fa fa-pencil" aria-hidden="true" onClick={()=>openEditModal(val._id)}></i>
                                <p>Edit</p>
                            </div>
                            <div style={{color: "red"}} className="trash">
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={()=>openDeleteModal(val._id)}></i>
                                <p>Delete</p>
                            </div>
                        </div>                            
                    </td>
                </tr>)
            });

    let laptopsMobileRow = searchLaptopLists && searchLaptopLists.map((val,index)=>{
        return (<React.Fragment key={index}>
                <table className="table table-hover" style={{width:"100%"}}>
                    <tbody>
                    <tr>
                        <th>Brand</th>
                        <td>{val.brand}</td>
                    </tr>
                    <tr>
                        <th>Processor</th>
                        <td>{val.processor}</td>
                    </tr>
                    <tr>
                        <th>Processor Brand</th>
                        <td>{val.processorBrand}</td>
                    </tr>
                    <tr>
                        <th>Screen Size</th>
                        <td>{val.screenSize}</td>
                            </tr>
                    <tr>
                        <th>Hard Disk</th>
                        <td>{val.hardDisk}</td>
                    </tr>
                    <tr>
                        <th>Ram</th>
                        <td>{val.ram}</td>
                    </tr>
                    <tr>
                        <th>Graphics Card</th>
                        <td>{val.graphicsCard}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td>{val.price}</td>
                    </tr>
                    <tr>
                        <th>Actions</th>
                        <td><div className="actionIcons">
                            <div className="bars">
                                <i style={{color: "green"}} className="fa fa-bars" aria-hidden="true" onClick={()=>openViewModal(val._id)}></i>
                            </div>
                            <div className="pencil">
                                <i style={{color: "purple"}} className="fa fa-pencil" aria-hidden="true" onClick={()=>openEditModal(val._id)}></i>
                            </div>
                            <div className="trash">
                                <i style={{color: "red"}} className="fa fa-trash-o" aria-hidden="true" onClick={()=>openDeleteModal(val._id)}></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <hr/>
                    </React.Fragment>)
        })
    
    let noSearchResults = searchLaptopLists && searchLaptopLists.length === 0 ? "No Laptops Found. Please refine you'r search keyword" : "";
    return(<div className="laptops">
        <DataLoader/>
        <div id="dekstopOnlySideBar"className="">Coming Soon</div>
        <table id="dekstopTable" className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Brand</th>
                <th scope="col">Processor</th>
                <th scope="col">Processor Brand</th>
                <th scope="col">Screen Size</th>
                <th scope="col">Hard Disk</th>
                <th scope="col">Ram</th>
                <th scope="col">Graphics Card</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {laptopsRow}
                <p className="noResultFoundText">{noSearchResults}</p>
            </tbody>
        </table>
        <ViewLaptopDetails showHide={showModal} hideShowHandler={openViewModal}/>
        <AddModal showHide={showEditModal} label="Edit Laptop Configurations" hideShowHandler={openEditModal}/>
        <DeleteLaptopModal showHide={showDeleteModal} label="Delete Laptop Configurations" hideShowHandler={openDeleteModal}/>

        <div id="mobileTable">
            {laptopsMobileRow}
            <p className="noResultFoundText"><br/>{noSearchResults}</p>
        </div>
    </div>)
}

const mapStateToProps = (state) =>{
    return{
        laptops: state.laptop.laptopLists,
        searchLaptopLists: state.laptop.searchLaptopLists,
        laptopFilterKeys: state.laptop.laptopFilterKeys
    }
}
export default connect(mapStateToProps,{GetLaptopsList, GetLaptopDetails, ClearLaptopDetails})(Laptops);