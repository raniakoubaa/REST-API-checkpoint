import { ADD, DELETE, EDIT, GET, GETONE } from "./actionTypes";

const initial={
    users:null,
    loading:true
}
export const userReducer= (state=initial,{type,payload})=>{
switch (type) {
    case GET:
    return {...state,loading:false,users:payload}
    case DELETE:
        return {...state,loading:false,users:state.users.filter(elt=>elt.id!==payload)}
        case ADD:
           return {
                ...state,loading:false,users:[...state.users,payload]
            }
            case EDIT:
                return{...state,
                    loading:false,
                    users:state.users.map(elt=>elt._id===payload._id?payload:elt)}
                    case GETONE:
                       return {...state,loading:false,users:state.users.find(elt=>elt._id===payload._id)}
    default:
        return state;
}
}