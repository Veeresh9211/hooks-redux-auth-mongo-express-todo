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
            dispatch({type: 'REGISTRATION_ERROR', val: error});
        })
    }
}





