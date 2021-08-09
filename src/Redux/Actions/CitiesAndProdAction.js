import {ActionTypes} from "../Constants/Constants";


export const incrementCities=(CityCount)=>{
    console.log('in actions')
    console.log(CityCount)
    return {
        type:ActionTypes.INCREMENT_CITIES,
        payload:CityCount
    }
}

export const resetCounter=()=>{
    return {
        type:ActionTypes.RESET_DATA
    }
}

export const setCities=(cityList)=>{
    return {
        type:'SET_DATA',
        payload:cityList
    }
}

