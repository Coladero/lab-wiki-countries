import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'




function CountryDetails() {

  const [countryDetail, setCountryDetail] = useState(null)
  const {countries} = useParams()
  
  

    const getDetail = async() =>{
      const details = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countries}`)
      // console.log(details.data)
      setCountryDetail(details.data)
    } 

    useEffect(()=>{
      getDetail()
    },[countries])

    if(!countryDetail){
      
      return <div>...Loanding</div>
 
    }

  return (
    <div>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`} alt="flag" />
    <h3>{countryDetail.name.common}</h3>
    <h4>Capital: {countryDetail.capital}</h4>
    <h4>Area: {countryDetail.area}</h4>
    <div key={countryDetail.alpha3Code}>
    <Link to={`/countries/${countryDetail.alpha3Code}`}>{countryDetail.borders}</Link>
    
    </div>
    {console.log(countryDetail.alpha3Code)}


    
    </div>
  )
}

export default CountryDetails