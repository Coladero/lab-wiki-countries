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
    <div key={countryDetail.name.common}>
    {/* esto funciona pero no esta bien, he intentado hacer un map pero no me ha funcionado. */}
    <Link to={`/countries/${countryDetail.borders[0]}`}>{countryDetail.borders[0]}</Link>
    <Link to={`/countries/${countryDetail.borders[1]}`}>{countryDetail.borders[1]}</Link>
    <Link to={`/countries/${countryDetail.borders[2]}`}>{countryDetail.borders[2]}</Link>
    <Link to={`/countries/${countryDetail.borders[3]}`}>{countryDetail.borders[3]}</Link>
    <Link to={`/countries/${countryDetail.borders[4]}`}>{countryDetail.borders[4]}</Link>
    <Link to={`/countries/${countryDetail.borders[5]}`}>{countryDetail.borders[5]}</Link>
    
    </div>
    {console.log(countryDetail.alpha3Code)}


    
    </div>
  )
}

export default CountryDetails