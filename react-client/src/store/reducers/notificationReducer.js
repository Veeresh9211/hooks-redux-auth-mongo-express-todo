const intialState={notify:false}

const NotificationReducer =(state=intialState, action)=>{
    switch(action.type){
        case 'SHOW_NOTIFICATION':
            return {
                notify: true
            }
        break;
        case 'END_NOTIFICATION':
            return {
                notify: false
            }
        break;
        default:
            return state
    }
}

export default NotificationReducer;