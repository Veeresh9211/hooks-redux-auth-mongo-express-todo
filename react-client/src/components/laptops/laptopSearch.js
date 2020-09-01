import React, {useState} from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './laptops.scss';
import AddModal from './addLaptops';
import {ClearLaptopDetailsAdd} from '../../store/actions/laptopAction';
import {connect} from 'react-redux';

const LaptopSearch = ({ClearLaptopDetailsAdd})=>{

    const [showModal, setShowModal] = useState(false);
    const ccc=[
        { label: 'Thing 1', value: 1},
        { label: 'Thing 2', value: 2},
    ];

    const openAddModal = () =>{
        ClearLaptopDetailsAdd();
        setShowModal(!showModal);
    }
    return(
        <div className="laptopSearch row">

            <div className="col-sm-3 search">
                <input type="text" className="searchBox" placeholder="Search Anything"/>
                <button className="searchButton">Search</button>
            </div>
            <div className="col-sm-3 moreFilter">
                <p>
                <button className="moreFilterButton" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    More Filters
                </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="row">
                        <div className="col-sm-2">
                            <ReactMultiSelectCheckboxes options={ccc} />
                        </div>
                        <div className="col-sm-2">
                            <ReactMultiSelectCheckboxes options={ccc} />
                        </div>
                        <div className="col-sm-2">
                            <ReactMultiSelectCheckboxes options={ccc} />
                        </div>
                        <div className="col-sm-2">
                            <ReactMultiSelectCheckboxes options={ccc} />
                        </div>
                        <div className="col-sm-2">
                            <ReactMultiSelectCheckboxes options={ccc} />
                        </div>
                        <div className="col-sm-2">
                            <ReactMultiSelectCheckboxes options={ccc} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-5">
                
            </div>
            <div className="col-sm-1 addLaptops">
                <button onClick={()=>openAddModal()}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            </div>
            <AddModal showHide={showModal} label="Add Laptop" hideShowHandler={openAddModal}/>
        </div>
    )
}

export default connect(null,{ClearLaptopDetailsAdd})(LaptopSearch);