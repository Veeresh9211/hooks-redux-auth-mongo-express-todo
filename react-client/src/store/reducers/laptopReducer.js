const intitalState={
    laptopLists: [],
    loader: false,
    laptopSaveStatus: "",
    laptopUpdateStatus: "",
    laptopDetails: "",
    laptopDeleteStatus: ""
}

const LaptopReducer = (state=intitalState, action) =>{
    switch(action.type){
        case 'BEGIN_API':
            return{
                ...state,
                loader: true
            }
        break;
        case 'LAPTOP_LIST':
            return{
                ...state,
                laptopLists: action.val
            }
        break;
        case 'LAPTOP_SAVE_SUCCESS':
            return{
                ...state,
                laptopSaveStatus: action.val
            }
        break;
        case 'LAPTOP_UPDATE_SUCCESS':
            return{
                ...state,
                laptopUpdateStatus: action.val
            }
        break;
        case 'LAPTOP_DELETE_SUCCESS':
            return{
                ...state,
                laptopDeleteStatus: action.val
            }
        break;
        case 'LAPTOP_DETAILS':
            return{
                ...state,
                laptopDetails: action.val
            }
        break;
        case 'CLEAR_LAPTOP_DETAILS':
            return{
                ...state,
                laptopSaveStatus: "",
                laptopUpdateStatus: ""
            }
        break;
        case 'CLEAR_LAPTOP_DETAILS_ADD':
            return{
                ...state,
                laptopDetails: "",
                laptopSaveStatus: ""
            }
        break;
        case 'END_API':
            return{
                ...state,
                loader: false
            }
        break;
        default:
            return{
                ...state
            }
    }
}

export default LaptopReducer;