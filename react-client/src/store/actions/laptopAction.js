import axios from 'axios';

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
        dispatch({type:'BEGIN_API'});
        axios.post(`${baseUrl}/laptops`, laptopRecord)
        .then(function (response) {
            dispatch({type: 'LAPTOP_SAVE_SUCCESS', val: response.status});
            // dispatch({type: 'END_API', val: false});
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

export const UpdateLaptop =(laptopRecord)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        axios.put(`${baseUrl}/laptops/${laptopRecord._id}`, laptopRecord)
        .then(function (response) {
            dispatch({type: 'LAPTOP_UPDATE_SUCCESS', val: response.status});
            // dispatch({type: 'END_API', val: false});
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

export const DeleteLaptop =(id)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        axios.delete(`${baseUrl}/laptops/${id}`)
        .then(function (response) {
            dispatch({type: 'LAPTOP_DELETE_SUCCESS', val: response.status});
            // dispatch({type: 'END_API', val: false});
            console.log(response);
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
        dispatch({type: 'LAPTOP_FILTER_SEARCH', val: key});
    }
}





