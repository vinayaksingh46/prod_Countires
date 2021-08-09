import React ,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {setCities} from '../../Redux/Actions/CitiesAndProdAction'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'


function Home() {
    
    const dispatch =useDispatch()
    const[countriesVisited,setCountriesVisited]=useState(0)
    const [productsVisisted,setProductsVisisted]=useState(0)

    const fetchCityDetails = async () => {
        const response = await axios.get(
          `https://assessments.reliscore.com/api/cities/`
        );
        console.log(response.data.data)
        dispatch(setCities(response.data.data))
        }

    useEffect(() => {
        fetchCityDetails()
    },[])  

    const incrementCity=()=>{
        setCountriesVisited((prevState)=>prevState+1)        
    }
    
    
    const {cityList}=useSelector((state)=>state.cityList)

    return (
        <div>
        <Navbar
            countriesVisited={countriesVisited}
            setCountriesVisited={setCountriesVisited}
            incrementCities={incrementCity}
        />
        <h1>Countries and Product tracker</h1>
            {cityList?cityList.map((city)=>(
                <div onMouseOver={incrementCity}><Link to={`/city/${city}`}>{city}</Link></div>
            )):<div>Loading</div>}
        </div>
    )
}

export default Home
