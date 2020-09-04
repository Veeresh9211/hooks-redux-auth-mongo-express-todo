const initialState = {
    registrationStatus: false,
    registrationStatusMessage: "",
    authToken: ""
}

const AuthReducer =(state=initialState, action) =>{
    switch(action.type){
        case 'REGISTRATION_SUCCESS':
            return{
                ...state,
                registrationStatus: true,
                registrationStatusMessage: action.val
            }
        break;
        case 'REGISTRATION_FAILURE':
            return{
                ...state,
                registrationStatus: false,
                

            }
        break;
        default:
            return{
                ...state
            }

    }
}

export default AuthReducer;