import React, { useState ,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {incrementCities, resetCounter,setCities} from '../../Redux/Actions/CitiesAndProdAction'
import axios from 'axios'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar(props) {
    const dispatch =useDispatch()

    const {cities,products}=useSelector((state)=>state.citiesAndProducts)
    // const[countriesVisited,setCountriesVisited]=useState(0)
    const [productsVisisted,setProductsVisisted]=useState(0)

    console.log(cities,products)

    const handleSave=(e)=>{
        e.preventDefault()
        dispatch(incrementCities({cities:props.countriesVisited}))

    }
    const handleRefresh=(e)=>{
        e.preventDefault()
    }
    const handleReset=(e)=>{
        e.preventDefault()
        props.setCountriesVisited(cities)
        setProductsVisisted(products)
    }

    // const incrementCity=()=>{
    //     setCountriesVisited((prevState)=>prevState+1)        
    // }

    return (

        <div className='navbar-div'>
            <Link to='/'>Home </Link>
            <span>Countries visited : {props.countriesVisited}</span>
            <span>Products visited : {productsVisisted}</span>
            <span className='navbar-btn' >
            
            <button onClick={handleSave}>Save</button>
            <button>Refresh</button>
            <button onClick={handleReset}>Reset</button>

        </span>
        </div>
        
    )
}

export default Navbar
