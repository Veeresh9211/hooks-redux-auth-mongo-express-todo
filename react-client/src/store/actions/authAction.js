import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const UserRegistration =(userRecord)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        axios.post(`${baseUrl}/users/register`, userRecord)
       .then((response)=>{
            dispatch({type: 'REGISTRATION_SUCCESS', val: response.data.msg});
        })
        .catch(function (error) {
            debugger
            dispatch({type: 'REGISTRATION_ERROR', val: error.response.data.msg});
        })
    }
}

export const UserLogin =(userRecord)=>{
    return (dispatch)=>{
        dispatch({type:'BEGIN_API'});
        axios.post(`${baseUrl}/users/login`, userRecord)
       .then((response)=>{
           debugger
            dispatch({type: 'LOGIN_SUCCESS', val: {token: response.data.token, userName: response.data.user.firstName}});
        })
        .catch(function (error) {
            debugger
            dispatch({type: 'LOGIN_ERROR', val: error.response.data.msg});
        })
    }
}


export const ClearRegistrationValues =()=>{
    return (dispatch)=>{
        dispatch({type:'CLEAR_REGISTRATION_VALUES', val: ""});
    }
}





