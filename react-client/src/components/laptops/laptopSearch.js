import React, {useState} from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './laptops.scss';
import AddModal from './addLaptops';
import {ClearLaptopDetailsAdd, LaptopSearchFilter} from '../../store/actions/laptopAction';
import {connect} from 'react-redux';

const LaptopSearch = ({ClearLaptopDetailsAdd, LaptopSearchFilter})=>{

    const [showModal, setShowModal] = useState(false);

    const openAddModal = () =>{
        ClearLaptopDetailsAdd();
        setShowModal(!showModal);
    }

    const searchLaptopResults = (e)=>{
        LaptopSearchFilter(e.currentTarget.value);
    }

    const filterLaptopResults = (e) =>{
        let searchValue = "";
        if(e.length > 0) {
            LaptopSearchFilter(e);
        }
    }
    
    return(
        <div className="laptopSearch row">

            
            <div className="col-sm-3 moreFilter">
                <p>
                <button className="moreFilterButton" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Search
                </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="row">
                        <div className="col-sm-6 search">
                            <input type="text" className="searchBox" id="searchBox" onChange={(e)=>searchLaptopResults(e)} placeholder="Search Anything"/>
                            <button className="searchButton" >Search</button>
                        </div>
                        <div className="col-sm-5">
                        </div>
                        <div style={{textAlign: "end", margin: "auto 0"}} className="col-sm-1">
                            <i data-toggle="collapse" data-target="#collapseExample" className="fa fa-window-close-o" aria-hidden="true"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                
            </div>
            <div className="col-sm-1 addLaptops">
                <button onClick={()=>openAddModal()}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            </div>
            <AddModal showHide={showModal} label="Add Laptop" hideShowHandler={openAddModal}/>
        </div>
    )
}

export default connect(null,{ClearLaptopDetailsAdd, LaptopSearchFilter})(LaptopSearch);