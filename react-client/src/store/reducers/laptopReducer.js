const intitalState={
    laptopLists: [],
    loader: false,
    laptopSaveStatus: "",
    laptopUpdateStatus: "",
    laptopDetails: "",
    laptopDeleteStatus: "",
    laptopFilterResult: "",
    laptopFilterKeys: ""
}

const LaptopReducer = (state=intitalState, action) =>{
    switch(action.type){
        case 'BEGIN_API':
            return{
                ...state
            }
        break;
        case 'LAPTOP_LIST':
            return{
                ...state,
                laptopLists: action.val,
                searchLaptopLists: action.val
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
        case 'LAPTOP_FILTER_SEARCH':
            
            const filteredData = state.laptopLists.filter(laptop => {
                return Object.keys(laptop).some((key) =>{
                    let res = ""
                    if(typeof laptop[key] === 'string'){
                        res = laptop[key].toLowerCase().includes(action.val.toLowerCase());
                        if (res)
                        {
                            return true;
                        }
                    }
                    else{
                        res = laptop[key].toString().includes(action.val)
                        if (res)
                        {
                            return true
                        }
                    }
                }
                );
              });
              let finalRes = action.val === "" ? state.laptopLists : [...filteredData]; 
            return{
                ...state,
                searchLaptopLists: finalRes
            }
        break;
        case 'Filter_Laptop_Results':
            return{
                ...state,
                searchLaptopLists: action.val
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
                laptopSaveStatus: "",
                laptopUpdateStatus: ""
            }
        break;
        case 'START_LOADER':
            return{
                ...state,
                loader: true
            }
        break;
        case 'END_LOADER':
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