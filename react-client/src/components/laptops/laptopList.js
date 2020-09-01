import React, { useEffect, useState } from 'react';
import './laptops.scss';
import {connect} from 'react-redux';
import {GetLaptopsList, GetLaptopDetails, ClearLaptopDetails} from '../../store/actions/laptopAction';
import ViewLaptopDetails from './viewLaptopDetails';
import AddModal from './addLaptops';
import DeleteLaptopModal from './deleteLaptop';


const Laptops = ({GetLaptopsList, laptops, GetLaptopDetails, ClearLaptopDetail, searchLaptopLists})=>{

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
        GetLaptopsList();
    },[0]);

    let laptopsRow = searchLaptopLists && searchLaptopLists.map((val,index)=>{
        return (<tr>
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
                            <div className="bars">
                                <i className="fa fa-bars" aria-hidden="true" onClick={()=>openViewModal(val._id)}></i>
                                <p>View</p>
                            </div>
                            <div className="pencil">
                                <i className="fa fa-pencil" aria-hidden="true" onClick={()=>openEditModal(val._id)}></i>
                                <p>Edit</p>
                            </div>
                            <div className="trash">
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={()=>openDeleteModal(val._id)}></i>
                                <p>Delete</p>
                            </div>
                        </div>                            
                    </td>
                </tr>)
    })
    return(<div className="laptops">
        <table className="table table-hover">
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
            </tbody>
        </table>
        <ViewLaptopDetails showHide={showModal} hideShowHandler={openViewModal}/>
        <AddModal showHide={showEditModal} label="Edit Laptop Configurations" hideShowHandler={openEditModal}/>
        <DeleteLaptopModal showHide={showDeleteModal} label="Delete Laptop Configurations" hideShowHandler={openDeleteModal}/>
    </div>)
}

const mapStateToProps = (state) =>{
    return{
        laptops: state.laptop.laptopLists,
        searchLaptopLists: state.laptop.searchLaptopLists
    }
}
export default connect(mapStateToProps,{GetLaptopsList, GetLaptopDetails, ClearLaptopDetails})(Laptops);