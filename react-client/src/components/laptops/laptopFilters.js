import React,{useState, useEffect} from 'react';
import './laptopFilters.scss';
import {connect} from 'react-redux';
import {FilterLaptopResults} from '../../store/actions/laptopAction';

const LaptopFilter = ({FilterLaptopResults, laptopFilterKeys})=>{

    const [filterObject, setFilterObject] = useState(null);
    const closeFilter = ()=>{
        let filterWidth = document.getElementById("laptopFilters").offsetWidth === 220 ? "0px" : "220px;";
        document.getElementById("laptopFilters").style.width = filterWidth;
    }
    const handleChange =(e)=>{
        if(filterObject && filterObject.hasOwnProperty(e.currentTarget.value))
        {
            delete filterObject[e.currentTarget.value];
            setFilterObject({...filterObject});
        }
        else{
            setFilterObject({...filterObject,[e.currentTarget.value]:e.currentTarget.name});
        }
    }

    useEffect(()=>{
        if(filterObject !== null){
            
            FilterLaptopResults(filterObject);
        }
    },[filterObject])

    useEffect(()=>{ // for retaining state on page refresh
        setFilterObject({...laptopFilterKeys});
        FilterLaptopResults(laptopFilterKeys);
    },[])

    const clearFilters =()=>{
        document.getElementById("filterForm").querySelectorAll("input[type='checkbox']").forEach((box)=>{
            box.checked = false;
        })
        setFilterObject({});
    }
    return(
        <div className="laptopFiltersNav" id="laptopFilters">
            <div className="filterHeader">
                <h5>FILTERS</h5>
                <button className="filterClose" onClick={()=>closeFilter()}>X</button>
            </div>
            <button className="clearFilters" onClick={()=>clearFilters()}>Clear Filters</button>
            <form id="filterForm">
                <div className="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse1" className="panel-heading">
                        <h6 className="panel-title">
    <a  data-parent="#accordion" >Brand {filterObject && Object.values(filterObject).filter((type)=> type == 'brand').length > 0 && <span className="countFilterInd">({Object.values(filterObject).filter((type)=> type == 'brand').length})</span>}</a>
                        </h6>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p><input type="checkbox" name="brand" id="Lenovo-brand" value="Lenovo" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Lenovo")}/>Lenovo</p>
                            <p><input type="checkbox" name="brand" id="Dell-brand" value="Dell" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Dell")}/>Dell</p>
                            <p><input type="checkbox" name="brand" id="HP-brand" value="HP" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("HP")}/>HP</p>
                            <p><input type="checkbox" name="brand" id="Samsung-brand" value="Samsung" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Samsung")}/>Samsung</p>
                            <p><input type="checkbox" name="brand" id="Apple-brand" value="Apple" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Apple")}/>Apple</p>
                            <p><input type="checkbox" name="brand" id="Asus-brand" value="Asus" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Asus")}/>Asus</p>
                            <p><input type="checkbox" name="brand" id="Zenith-brand" value="Zenith" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Zenith")}/>Zenith</p>
                            <p><input type="checkbox" name="brand" id="iBall-brand" value="iBall" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("iBall")}/>iBall</p>
                            <p><input type="checkbox" name="brand" id="Zebronics-brand" value="Zebronics" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Zebronics")}/>Zebronics</p>

                        </div>
                    </div>
                </div>
                <div className="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse2" className="panel-heading">
                        <h6 className="panel-title">
                        <a data-parent="#accordion">Processor {filterObject && Object.values(filterObject).filter((type)=> type == 'processor').length > 0 && <span className="countFilterInd">({Object.values(filterObject).filter((type)=> type == 'processor').length})</span>}</a>
                        </h6>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p><input type="checkbox" name="processor" value="Core i5" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Core i5")}/>Core i5</p>
                            <p><input type="checkbox" name="processor" value="Core i9" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Core i9")}/>Core i9</p>
                            <p><input type="checkbox" name="processor" value="Core i7" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Core i7")}/>Core i7</p>
                            <p><input type="checkbox" name="processor" value="Ryzen 5 Quad Core" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Ryzen 5 Quad Core")}/>Ryzen 5 Quad Core</p>
                            <p><input type="checkbox" name="processor" value="Ryzen 7 Quad Core" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Ryzen 7 Quad Core")}/>Ryzen 7 Quad Core</p>
                            <p><input type="checkbox" name="processor" value="Pentium Dual Core" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Pentium Dual Core")}/>Pentium Dual Core</p>
                        </div>
                    </div>
                </div>
                <div  className="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse3"className="panel-heading">
                        <h6 className="panel-title">
                        <a data-parent="#accordion" >Processor Brand {filterObject && Object.values(filterObject).filter((type)=> type == 'processorBrand').length > 0 && <span className="countFilterInd">({Object.values(filterObject).filter((type)=> type == 'processorBrand').length})</span>}</a>
                        </h6>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p><input type="checkbox" name="processorBrand" value="Intel" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Intel")}/>Intel</p>
                            <p><input type="checkbox" name="processorBrand" value="AMD" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("AMD")}/>AMD</p>
                            <p><input type="checkbox" name="processorBrand" value="Microsoft" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Microsoft")}/>Microsoft</p>
                        </div>
                    </div>
                </div>
                <div  className="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse7"className="panel-heading">
                        <h6 className="panel-title">
                        <a data-parent="#accordion" >Processor Generation {filterObject && Object.values(filterObject).filter((type)=> type == 'processorGeneration').length > 0 && <span className="countFilterInd">({Object.values(filterObject).filter((type)=> type == 'processorGeneration').length})</span>}</a>
                        </h6>
                    </div>
                    <div id="collapse7" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p><input type="checkbox" name="processorGeneration" value="10th Generation" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("10th Gen")}/>10th Gen</p>
                            <p><input type="checkbox" name="processorGeneration" value="9th Generation" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("9th Gen")}/>9th Gen</p>
                            <p><input type="checkbox" name="processorGeneration" value="8th Generation" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("8th Gen")}/>8th Gen</p>
                            <p><input type="checkbox" name="processorGeneration" value="5th Generation" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("5th Gen")}/>5th Gen</p>
                            <p><input type="checkbox" name="processorGeneration" value="4th Generation" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("4th Gen")}/>4th Gen</p>
                        </div>
                    </div>
                </div>

              
                <div  className="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse8" className="panel-heading">
                        <h6 className="panel-title">
                        <a data-parent="#accordion" >Operating System {filterObject && Object.values(filterObject).filter((type)=> type == 'operatingSystem').length > 0 && <span className="countFilterInd">({Object.values(filterObject).filter((type)=> type == 'operatingSystem').length})</span>}</a>
                        </h6>
                    </div>
                    <div id="collapse8" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p><input type="checkbox" name="operatingSystem" value="Windows 8" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Windows 8")}/>Windows 8</p>
                            <p><input type="checkbox" name="operatingSystem" value="DOS" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("DOS")}/>DOS</p>
                            <p><input type="checkbox" name="operatingSystem" value="Mac OS" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("Mac OS")}/>Mac OS</p>
                        </div>
                    </div>
                </div>
                <div  className="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse9" className="panel-heading">
                        <h6 className="panel-title">
                        <a data-parent="#accordion" >Hard Disk {filterObject && Object.values(filterObject).filter((type)=> type == 'hardDisk').length > 0 && <span className="countFilterInd">({Object.values(filterObject).filter((type)=> type == 'hardDisk').length})</span>}</a>
                        </h6>
                    </div>
                    <div id="collapse9" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p><input type="checkbox" name="hardDisk" value="250 GB" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("250 GB")}/>250 GB</p>
                            <p><input type="checkbox" name="hardDisk" value="500 GB" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("500 GB")}/>500 GB</p>
                            <p><input type="checkbox" name="hardDisk" value="1 TB" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("1 TB")}/>1 TB</p>
                        </div>
                    </div>
                </div>
                <div  className="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse4" className="panel-heading">
                        <h6 className="panel-title">
                        <a data-parent="#accordion">Ram {filterObject && Object.values(filterObject).filter((type)=> type == 'ram').length > 0 && <span className="countFilterInd">({Object.values(filterObject).filter((type)=> type == 'ram').length})</span>}</a>
                        </h6>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p><input type="checkbox" name="ram" value="2 GB" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("2 GB")}/>2 GB</p>
                            <p><input type="checkbox" name="ram" value="4 GB" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("4 GB")}/>4 GB</p>
                            <p><input type="checkbox" name="ram" value="8 GB" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("8 GB")}/>8 GB</p>
                            <p><input type="checkbox" name="ram" value="16 GB" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("16 GB")}/>16 GB</p>
                        </div>
                    </div>
                </div>
                <div className="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse6" className="panel-heading">
                        <h6 className="panel-title">
                        <a data-parent="#accordion">Storage Type {filterObject && Object.values(filterObject).filter((type)=> type == 'storageType').length > 0 && <span className="countFilterInd">({Object.values(filterObject).filter((type)=> type == 'storageType').length})</span>}</a>
                        </h6>
                    </div>
                    <div id="collapse6" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p><input type="checkbox" name="storageType" value="HDD" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("HDD")}/>HDD</p>
                            <p><input type="checkbox" name="storageType" value="SSD" onChange={(e)=>handleChange(e)} checked = {Object.keys(laptopFilterKeys).includes("SSD")}/>SSD</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        laptopFilterKeys: state.laptop.laptopFilterKeys
    }
}
export default connect(mapStateToProps,{FilterLaptopResults})(LaptopFilter);