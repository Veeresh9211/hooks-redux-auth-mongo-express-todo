import React,{useState, useEffect} from 'react';
import './laptopFilters.scss';
import {connect} from 'react-redux';
import {FilterLaptopResults} from '../../store/actions/laptopAction';

const LaptopFilter = ({FilterLaptopResults})=>{

    const [filterObject, setFilterObject] = useState({});
    const closeFilter = ()=>{
        let filterWidth = document.getElementById("laptopFilters").offsetWidth === 220 ? "0px" : "220px;";
        document.getElementById("laptopFilters").style.width = filterWidth;
    }
    const handleChange =(e)=>{
        if(filterObject.hasOwnProperty(e.currentTarget.value))
        {
            delete filterObject[e.currentTarget.value];
            setFilterObject({...filterObject});
        }
        else{
            setFilterObject({...filterObject,[e.currentTarget.value]:e.currentTarget.name});
        }
    }

    useEffect(()=>{
        FilterLaptopResults(filterObject);
    },[filterObject])

    return(
        <div className="laptopFiltersNav" id="laptopFilters">
            <div className="filterHeader">
                <h5>FILTERS</h5>
                <button className="filterClose" onClick={()=>closeFilter()}>X</button>
            </div>
            <form>
                <div class="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse1" class="panel-heading">
                        <h6 class="panel-title">
                        <a  data-parent="#accordion" >Brand</a>
                        </h6>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p><input type="checkbox" name="brand" id="Lenovo-brand" value="Lenovo-brand" onChange={(e)=>handleChange(e)}/>Lenovo</p>
                            <p><input type="checkbox" name="brand" id="Dell-brand" value="Dell" onChange={(e)=>handleChange(e)}/>Dell</p>
                            <p><input type="checkbox" name="brand" id="HP-brand" value="HP" onChange={(e)=>handleChange(e)}/>HP</p>
                            <p><input type="checkbox" name="brand" id="Samsung-brand" value="Samsung" onChange={(e)=>handleChange(e)}/>Samsung</p>
                            <p><input type="checkbox" name="brand" id="Apple-brand" value="Apple" onChange={(e)=>handleChange(e)}/>Apple</p>
                            <p><input type="checkbox" name="brand" id="Asus-brand" value="Asus" onChange={(e)=>handleChange(e)}/>Asus</p>
                            <p><input type="checkbox" name="brand" id="Zenith-brand" value="Zenith" onChange={(e)=>handleChange(e)}/>Zenith</p>
                            <p><input type="checkbox" name="brand" id="iBall-brand" value="iBall" onChange={(e)=>handleChange(e)}/>iBall</p>
                            <p><input type="checkbox" name="brand" id="Zebronics-brand" value="Zebronics" onChange={(e)=>handleChange(e)}/>Zebronics</p>

                        </div>
                    </div>
                </div>
                <div class="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse2" class="panel-heading">
                        <h6 class="panel-title">
                        <a data-parent="#accordion">Processor</a>
                        </h6>
                    </div>
                    <div id="collapse2" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p><input type="checkbox" name="processor" value="Core i5" onChange={(e)=>handleChange(e)}/>Core i5</p>
                            <p><input type="checkbox" name="processor" value="Core i9" onChange={(e)=>handleChange(e)}/>Core i9</p>
                            <p><input type="checkbox" name="processor" value="Core i7" onChange={(e)=>handleChange(e)}/>Core i7</p>
                            <p><input type="checkbox" name="processor" value="Ryzen 5 Quad Core" onChange={(e)=>handleChange(e)}/>Ryzen 5 Quad Core</p>
                            <p><input type="checkbox" name="processor" value="Ryzen 7 Quad Core" onChange={(e)=>handleChange(e)}/>Ryzen 7 Quad Core</p>
                            <p><input type="checkbox" name="processor" value="Pentium Dual Core" onChange={(e)=>handleChange(e)}/>Pentium Dual Core</p>
                        </div>
                    </div>
                </div>
                <div  class="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse3"class="panel-heading">
                        <h6 class="panel-title">
                        <a data-parent="#accordion" >Processor Brand</a>
                        </h6>
                    </div>
                    <div id="collapse3" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p><input type="checkbox" name="processorBrand" value="Intel" onChange={(e)=>handleChange(e)}/>Intel</p>
                            <p><input type="checkbox" name="processorBrand" value="AMD" onChange={(e)=>handleChange(e)}/>AMD</p>
                            <p><input type="checkbox" name="processorBrand" value="Microsoft" onChange={(e)=>handleChange(e)}/>Microsoft</p>
                        </div>
                    </div>
                </div>
                <div  class="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse4" class="panel-heading">
                        <h6 class="panel-title">
                        <a data-parent="#accordion">Ram</a>
                        </h6>
                    </div>
                    <div id="collapse4" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p><input type="checkbox" name="ram" value="2 GB" onChange={(e)=>handleChange(e)}/>2 GB</p>
                            <p><input type="checkbox" name="ram" value="4 GB" onChange={(e)=>handleChange(e)}/>4 GB</p>
                            <p><input type="checkbox" name="ram" value="8 GB" onChange={(e)=>handleChange(e)}/>8 GB</p>
                            <p><input type="checkbox" name="ram" value="16 GB" onChange={(e)=>handleChange(e)}/>16 GB</p>
                        </div>
                    </div>
                </div>
                <div class="panel-group" id="accordion">
                    <div data-toggle="collapse" href="#collapse6" class="panel-heading">
                        <h6 class="panel-title">
                        <a data-parent="#accordion">Storage Type</a>
                        </h6>
                    </div>
                    <div id="collapse6" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p><input type="checkbox" name="storageType" value="HDD" onChange={(e)=>handleChange(e)}/>HDD</p>
                            <p><input type="checkbox" name="storageType" value="SSD" onChange={(e)=>handleChange(e)}/>SSD</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect(null,{FilterLaptopResults})(LaptopFilter);