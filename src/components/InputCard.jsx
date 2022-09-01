import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import '../style/InputCard.css'

import Countries_data from '../Countries'

function InputCard({ set_Image, set_Temp, set_City, set_Country, set_Description, set_Wind_Speed, set_Humidity }) {

    const [Countries, setCountries] = useState([]);

    const [Country, setCountry] = useState("");
    const [City, setCity] = useState("");

    useEffect(() => {
        // console.log(Countries_data["Afghanistan"])
        setCountries(Object.keys(Countries_data))
    }, [])

    const HandleChangeCountry = (event) => {
        setCountry(event.target.value)
        setCity("")
        const CityDropDown = document.getElementById("CityDropDown")
        CityDropDown.value = "default"
    }

    const HandleChangeCity = (event) => {
        setCity(event.target.value)
    }

    //unique values only
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    const CheckWeather = () => {
        if (Country === "") {
            alert('Please Select Country 😀')
            return;
        }
        if (City === "") {
            alert('Please Select City 😀')
            return;
        }
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&APPID=0193b5d33ca87ec43b479e3ac7667f48&units=metric&units=metric`).then((response) => {
            const result = response.data
            set_Image(result.weather[0].icon)
            set_Temp(result.main.temp)
            set_City(City)
            set_Country(Country)
            set_Description(result.weather[0].description)
            set_Wind_Speed(result.wind.speed)
            set_Humidity(result.main.humidity)
        })
    }

    return (
        <div className='InputCardDiv'>
            <div className='InputCard'>
                <div className='Country_Field'>
                    <label>Country</label>
                    <select defaultValue="default" onChange={HandleChangeCountry}>
                        <option value="default" key="default" disabled>----Select Country----</option>
                        {Countries.filter(onlyUnique).map((value) => {
                            if (value === "") return null
                            return (<option value={value} key={value}>{value}</option>)
                        })}
                    </select>
                </div>


                <div className='City_Field'>
                    <label>City</label>
                    <select id="CityDropDown" disabled={Country === ""} defaultValue="default" onChange={HandleChangeCity}>
                        <option value="default" key="default" disabled>----Select City----</option>
                        {Countries_data[Country].filter(onlyUnique).map((value) => {
                            return (<option value={value} key={value}>{value}</option>)
                        })}
                    </select>
                </div>

                <button onClick={CheckWeather}><Link to={City === "" ? '/' : '/result'}>Check Weather 🌧️</Link></button>
            </div>
        </div>
    )
}

export default InputCard