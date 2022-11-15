import React from 'react'
import { useEffect, useState } from 'react';

import ContentLoader from './ContentLoader'
import Country from '../Country'
import SearchCountry from './SearchCountry';

const url = 'https://restcountries.com/v3.1/all'

export default function Countries() {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filterdCountries, setFilterdCountries] = useState(countries)
    const dataFetch = async (url) => {
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setCountries(data)
            setFilterdCountries(data)
            setIsLoading(false)
            setError(null)
        } catch (error) {
            setIsLoading(false)
            setError(error)
            console.log(error)
        }
    }
    useEffect(() => {
        dataFetch(url)
    }, [])

    const handleRemove = (data) => {
        const filter = filterdCountries.filter((country) => country.name.common !== data)
        setFilterdCountries(filter)
    }
    const hamdleSearch = (searchValue) =>{
        let value = searchValue.toLowerCase();
        const newCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value)
        })
        setFilterdCountries(newCountries)
    }
    return (
        <div className='container'>
            <h2 className='text-center w-100 mt-3 pb-3
            '>Country App</h2>
            <SearchCountry onSearch = {hamdleSearch} />
            <div className="row mt-5">
                {isLoading && <ContentLoader />}
                {error && <p>{error.message}</p>}
                {countries && filterdCountries.map((country, index) => (
                    <Country onData={handleRemove} country={country} key={index} />
                ))}
            </div>
        </div>
    )
}
