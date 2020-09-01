import axios from 'axios';

export const GetLaptopDetails =(id)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        axios.get(`http://localhost:8080/laptops/${id}`)
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
        axios.get('http://localhost:8080/laptops')
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
        axios.post('http://localhost:8080/laptops', laptopRecord)
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
        axios.put(`http://localhost:8080/laptops/${laptopRecord._id}`, laptopRecord)
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
        axios.delete(`http://localhost:8080/laptops/${id}`)
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





