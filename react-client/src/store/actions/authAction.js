import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const UserRegistration =(userRecord)=>{
    return (dispatch)=>{
        dispatch({type: 'START_LOADER', val: true});
        axios.post(`${baseUrl}/users/register`, userRecord)
       .then((response)=>{
            dispatch({type: 'REGISTRATION_SUCCESS', val: response.data.msg});
            dispatch({type: 'END_LOADER', val: false});
        })
        .catch(function (error) {
            dispatch({type: 'REGISTRATION_ERROR', val: error.response.data.msg});
            dispatch({type: 'END_LOADER', val: false});
        })
    }
}

export const UserLogin =(userRecord)=>{
    return (dispatch)=>{
        dispatch({type: 'START_LOADER', val: true});
        axios.post(`${baseUrl}/users/login`, userRecord)
       .then((response)=>{
            dispatch({type: 'LOGIN_SUCCESS', val: {token: response.data.token, userName: response.data.user.firstName, showLoginSuccessModal: true}});
            dispatch({type: 'END_LOADER', val: false});
        })
        .catch(function (error) {
            dispatch({type: 'LOGIN_ERROR', val: error.response.data.msg});
            dispatch({type: 'END_LOADER', val: false});
        })
    }
}


export const ClearRegistrationValues =()=>{
    return (dispatch)=>{
        dispatch({type:'CLEAR_REGISTRATION_VALUES', val: ""});
    }
}

export const VerifyUserAuthentication =()=>{
    if(JSON.parse(localStorage.getItem('persist:userDetails')) && JSON.parse(localStorage.getItem('persist:userDetails')).authToken !== undefined){ // for first time...
        return (dispatch)=>{
            axios.get(`${baseUrl}/users/verifyToken`,{ headers: {"Authorization" : JSON.parse(localStorage.getItem('persist:userDetails')).authToken.split("\"")[1]}})
            .then(response => {      
                dispatch({type:"VERIFY_TOKEN_SUCCESS", val:{token: response.data.token, userName: response.data.user.firstName}});
                dispatch({type:'END_API'});
            })
            .catch(error => { 
                dispatch({type:"VERIFY_TOKEN_FAILURE", val:error.response.data.msg});
            });
        }
    }
    else{
        return (dispatch)=>{
            dispatch({type:"NO_LOGGED_IN_YET", val:""});
        }
    }
    
}

export const UserLogout =()=>{
    return (dispatch)=>{
        dispatch({type: 'START_LOADER', val: true});
        dispatch({type:'LOGOUT_USER', val: ""});
        setTimeout(function(){ dispatch({type: 'END_LOADER', val: true}) }, 500);
    }
}






