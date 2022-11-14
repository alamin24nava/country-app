import React from 'react'
import { useEffect, useState } from 'react';

import ContentLoader from './ContentLoader'
import Country from '../Country'

const url = 'https://restcountries.com/v3.1/all'

export default function Countries() {
    const [countries, setCountries] = useState(null)
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
    return (
        <div className='container'>
            <h2 className='text-center w-100 mt-3 pb-3
            '>Country App</h2>
            <div class="mb-3 w-50 m-auto">
                <input type="text" class="form-control" id="" placeholder="Search Country" />
            </div>
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
