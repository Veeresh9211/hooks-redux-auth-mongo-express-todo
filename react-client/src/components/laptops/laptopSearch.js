import React, {useState, useEffect} from 'react';
import LaptopFilter from './laptopFilters';
import './laptops.scss';
import AddModal from './addLaptops';
import {ClearLaptopDetailsAdd, LaptopSearchFilter} from '../../store/actions/laptopAction';
import {connect} from 'react-redux';

const LaptopSearch = ({ClearLaptopDetailsAdd, LaptopSearchFilter, searchLaptopLists, laptops})=>{

    const [showModal, setShowModal] = useState(false);
    const [showRecords, setshowRecords] = useState(false);
    
    const openAddModal = () =>{
        ClearLaptopDetailsAdd();
        setShowModal(!showModal);
    }

    const searchLaptopResults = (e)=>{
        setshowRecords(true);
        LaptopSearchFilter(e.currentTarget.value);
    }

    const resetValues = ()=>{
        document.getElementById("searchBox").value = "";
        setshowRecords(false);
    }

    const openFilter = ()=>{
        let filterWidth = document.getElementById("laptopFilters").offsetWidth === 220 ? "0px" : "220px";
        document.getElementById("laptopFilters").style.width = filterWidth;
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
                        <div className="col-sm-8 search">
                            <input type="text" className="searchBox" id="searchBox" onChange={(e)=>searchLaptopResults(e)} placeholder="Search Anything"/>
                            <button className="searchButton" >Search</button>
                        </div>
                        <div className="col-sm-3">
                            
                        </div>
                        <div style={{textAlign: "end", margin: "auto 0"}} className="col-sm-1">
                            <i onClick={()=>resetValues()} data-toggle="collapse" data-target="#collapseExample" className="fa fa-window-close-o" aria-hidden="true"></i>
                        </div>
                        
                    </div>  
                    {document.getElementById("searchBox") && document.getElementById("searchBox").value !== "" && searchLaptopLists && showRecords && searchLaptopLists.length !== 0 && <p id="resultCountMobileOnly">{searchLaptopLists.length} laptop(s) found. </p>}
                </div>
                
            </div>
            <div className="col-sm-8">

                <button className="mainFilterButton" onClick={()=>openFilter()}><i class="fa fa-filter" aria-hidden="true"></i></button>
            </div>
            <div className="col-sm-1 addLaptops">
                <button onClick={()=>openAddModal()}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            </div>
            <AddModal showHide={showModal} label="Add Laptop" hideShowHandler={openAddModal}/>
            <LaptopFilter/>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        laptops: state.laptop.laptopLists,
        searchLaptopLists: state.laptop.searchLaptopLists
    }
}

export default connect(mapStateToProps,{ClearLaptopDetailsAdd, LaptopSearchFilter})(LaptopSearch);