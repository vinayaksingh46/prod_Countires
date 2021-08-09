import { combineReducers } from "redux"
import {citiesAndProductReducer,citiesReducer} from './CitiesAndProductReducer'


const mainReducer=combineReducers({
    citiesAndProducts:citiesAndProductReducer,
    cityList:citiesReducer
})

export default mainReducer