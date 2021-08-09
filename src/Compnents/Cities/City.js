import React,{useEffect, useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setCities} from '../../Redux/Actions/CitiesAndProdAction'
import axios from 'axios'

function City({}) {

    const { cityName } = useParams();

    const [products,setProducts]= useState([]);
    const dispatch =useDispatch()
    const fetchProductDetails = async () => {
        const response = await axios.get(
          `https://assessments.reliscore.com/api/sales/${cityName}/`
        );
        
        setProducts(response.data.data)
        //dispatch(setCities(response.data.data))
        }

    useEffect(() => {
        fetchProductDetails()
    },[])  
    console.log(products)

    return (
        <div>
            <h1>This is {cityName}'s  page</h1>
            <br></br>
            <h3>The products sold are :</h3>
            <div>
            {/* {products?
            products.map((product)=>(<li>{product}</li>))
            :<h5>Loading</h5>} */}

            {
          Object.keys(products).map((oneKey,i)=>{
            return (
                <div>
                <li><Link key={i} to={`/products/${oneKey}`}>{oneKey }: {products[oneKey]}</Link> </li>
                </div>          
              )
          })}
            </div>          
            {/* <Link to='/products/product1'>City of choicee</Link> */}
        </div>
    )
}

export default City
