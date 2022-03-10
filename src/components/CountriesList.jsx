import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CountriesList() {

    const [listOfCountries, setListOfCountries] = useState(null)

    const getCountries = async() =>{
        const countries = await axios.get ("https://ih-countries-api.herokuapp.com/countries")
        // console.log(countries.data)
        setListOfCountries(countries.data)
    }

    useEffect(()=>{
        getCountries()
    },[])
    if(!listOfCountries){
        return <div>...Loading</div>
    }
  return (
    <div>
    <h3>Countries List</h3>

    {listOfCountries.map((eachCountry, index)=>{
        {/* console.log(eachCountry.alpha3Code) */}
        return(
            <div key={eachCountry.alpha3Code + index}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase ()}.png`} alt="flag" /> <br />
                <Link to={`/countries/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
            </div>
        )
    })}
    
    
    
    </div>
  )
}

export default CountriesList