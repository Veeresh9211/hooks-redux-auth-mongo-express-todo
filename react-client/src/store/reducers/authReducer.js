const initialState = {
    registrationStatus: false,
    registrationStatusMessage: "",
    authToken: undefined,
    loginStatus: false,
    showLoginSuccessModal: "",
    userName: "",
    setshowLoginSucess: false,
    authenticatedUser: false,
    sessionExpiredMessage: "",
    sessionExpired: false,
    loginStatusErrorMessage: "",
    logoutStatus: false
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
                registrationStatusMessage: action.val,
                sessionExpiredMessage: "",
                loginStatusErrorMessage: "",
                logoutStatus: false

            }
        break;
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                loginStatus: true,
                authToken: action.val.token,
                userName: action.val.userName,
                showLoginSuccessModal: action.val.showLoginSuccessModal,
                sessionExpired: false,
                sessionExpiredMessage: "",
                registrationStatus: false,
            }
        break;
        case 'LOGIN_ERROR':
            return{
                ...state,
                loginStatus: false,
                authToken: "",
                userName: "",
                loginStatusErrorMessage: action.val

            }
        break;
        case 'LOGOUT_USER':
            return{
                ...state,
                loginStatus: false,
                authToken: undefined,
                userName: "",
                showLoginSuccessModal: "",
                logoutStatus: true

            }
        break;
        // case 'CLEAR_LOGIN__VALUES':
        //     return{
        //         ...state,
        //         loginStatus: false,
        //         authToken: "",
        //         userName: ""

        //     }
        // break;
        case 'VERIFY_TOKEN_SUCCESS':
            return {
                ...state,
                authenticatedUser: true,
                loginStatus: true,
                authToken: action.val.token,
                userName: action.val.userName
                 
            }
        break;
        case 'VERIFY_TOKEN_FAILURE':
            return {
                ...state,
                authenticatedUser: false,
                loginStatus: false,
                authToken: undefined,
                userName: "",
                sessionExpiredMessage: action.val,
                sessionExpired: true
            }
        break;
        case 'NO_LOGGED_IN_YET':
            return {
                ...state
            }
        break;
        default:
            return{
                ...state
            }

    }
}

export default AuthReducer;