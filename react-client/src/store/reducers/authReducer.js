const initialState = {
    registrationStatus: false,
    registrationStatusMessage: "",
    authToken: "",
    loginStatus: false,
    loginStatusMessage: "",
    userName: ""
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
        case 'REGISTRATION_ERROR':
            return{
                ...state,
                registrationStatus: false,
                registrationStatusMessage: action.val

            }
        break;
        case 'CLEAR_REGISTRATION_VALUES':
            return{
                ...state,
                registrationStatus: false,
                registrationStatusMessage: action.val

            }
        break;
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                loginStatus: true,
                authToken: action.val.token,
                userName: action.val.userName
            }
        break;
        case 'LOGIN_ERROR':
            return{
                ...state,
                loginStatus: false,
                authToken: "",
                userName: ""

            }
        break;
        case 'CLEAR_LOGIN__VALUES':
            return{
                ...state,
                loginStatus: false,
                authToken: "",
                userName: ""

            }
        break;
        default:
            return{
                ...state
            }

    }
}

export default AuthReducer;