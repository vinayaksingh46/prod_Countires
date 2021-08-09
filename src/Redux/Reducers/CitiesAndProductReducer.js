import {ActionTypes} from "../Constants/Constants";

const initialState ={
        cities:0,
        products:0
}


export const citiesAndProductReducer=(state=initialState,action)=>{
    
    switch (action.type) {
        
        case ActionTypes.INCREMENT_CITIES:
            return {...state,cities:action.payload.cities}
        
        case ActionTypes.RESET_DATA:
            return {...state,cities:0,products:0}
        
        default:
            return state
    }
}
export const citiesReducer=(state=[],action)=>{
    
    switch (action.type) {
        
        case 'SET_DATA':
            return {cityList:action.payload} 
        default:
            return state
    }
}