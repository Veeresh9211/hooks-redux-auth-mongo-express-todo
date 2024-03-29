import axios from 'axios';
import io from "socket.io-client";
const baseUrl = process.env.REACT_APP_BASE_URL;



export const GetLaptopDetails =(id)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        axios.get(`${baseUrl}/laptops/${id}`)
        .then(function (response) {
            dispatch({type: 'LAPTOP_DETAILS', val: response.data[0]});
            // dispatch({type: 'END_API', val: false});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

export const GetLaptopsList =()=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        axios.get(`${baseUrl}/laptops`)
        .then(function (response) {
            dispatch({type: 'LAPTOP_LIST', val: response.data});
            // dispatch({type: 'END_API', val: false});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

export const SaveLaptop =(laptopRecord)=>{
    return (dispatch)=>{
        let saveRes = "";
        dispatch({type:'BEGIN_API'});
        axios.post(`${baseUrl}/laptops`, laptopRecord)
        .then(function (response) {
            saveRes = response;
            return axios.get(`${baseUrl}/laptops`);
        }).then((response)=>{
            dispatch({type: 'LAPTOP_LIST', val: response.data});
            dispatch({type: 'LAPTOP_SAVE_SUCCESS', val: saveRes.status});
            document.getElementById("addUpdateLaptopModal").parentElement.scrollTo({top: 0, behavior: 'smooth'});
        })
        .catch(function (error) {
            document.getElementById("addUpdateLaptopModal").parentElement.scrollTo({top: 0, behavior: 'smooth'});
            console.log(error);
        })
    }
}

export const UpdateLaptop =(laptopRecord)=>{
    const socket = io.connect(baseUrl);
    let updateRes = "";
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        axios.put(`${baseUrl}/laptops/${laptopRecord._id}`, laptopRecord)
        .then(function (response) {
            updateRes = response;
            return axios.get(`${baseUrl}/laptops`);
        }).then((response)=>{
            dispatch({type: 'LAPTOP_LIST', val: response.data});
            dispatch({type: 'LAPTOP_UPDATE_SUCCESS', val: updateRes.status});
            document.getElementById("addUpdateLaptopModal").parentElement.scrollTo({top: 0, behavior: 'smooth'});
        })
            // socket.emit('updatedLaptop','success');
            // socket.on('updatedLaptopLists',(res)=>{
            //     console.log(res)
            //     dispatch({type: 'LAPTOP_UPDATE_SUCCESS', val: response.status});
            // })
            // dispatch({type: 'END_API', val: false});
        .catch(function (error) {
            document.getElementById("addUpdateLaptopModal").parentElement.scrollTo({top: 0, behavior: 'smooth'});
            console.log(error);
        })
    }
}

export const DeleteLaptop =(id)=>{
    return (dispatch)=>{
        let deleteRes = "";
        dispatch({type:'BEGIN_API'});
        axios.delete(`${baseUrl}/laptops/${id}`)
        .then(function (response) {
        deleteRes = response;
            return axios.get(`${baseUrl}/laptops`);
        }).then((response)=>{
            dispatch({type: 'LAPTOP_LIST', val: response.data});
            dispatch({type: 'LAPTOP_DELETE_SUCCESS', val: deleteRes.status});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

export const ClearLaptopDetails = () =>{
    return (dispatch)=>{
        dispatch({type: 'CLEAR_LAPTOP_DETAILS', val: ""});
    }
}
export const ClearLaptopDetailsAdd = () =>{
    return (dispatch)=>{
        dispatch({type: 'CLEAR_LAPTOP_DETAILS_ADD', val: ""});
    }
}

export const LaptopSearchFilter = (key) =>{
    return (dispatch)=>{
        dispatch({type: 'START_LOADER', val: true});
        dispatch({type: 'LAPTOP_FILTER_SEARCH', val: key});
        setTimeout(function(){ dispatch({type: 'END_LOADER', val: true}) }, 1000);
    }
}

export const FilterLaptopResults = (filterL) =>{
    let filterStore = filterL;
    let keysList= [...new Set(Object.values(filterL))];
    let finalObj = {}
    keysList.forEach((key)=>{
        let valuesList = Object.keys(filterL).filter(key2 => filterL[key2] === key);
        finalObj = {...finalObj,[key]:valuesList}
    })
   
    return (dispatch) =>{
        dispatch({type: 'START_LOADER', val: true});
        axios.post(`${baseUrl}/laptops/filters`, finalObj)
        .then((response)=>{
            dispatch({type: "Filter_Laptop_Results", val: {res: response.data, filterKeysApplied: filterStore}});
            setTimeout(function(){ dispatch({type: 'END_LOADER', val: true}) }, 500);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}





