import React from 'react'
import { useEffect, useState } from 'react';

import ContentLoader from './ContentLoader'
import Country from '../Country'


export default function Countries() {
    const [countries, setCountries] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
            if (!res.ok) {
                throw Error('Data Fetch Error')
            }
            return res.json()
        })
        .then((data) => {
            setIsLoading(false)
            setError(false)
            setCountries(data)
            console.log(countries)
        })
        .catch((error) => {
            setError(error)
            setIsLoading(false)
        })
    }, [])
  return (
    <div className='container'>
            <h2 className='text-center w-100 mt-3'>Country App</h2>
            <div className="row mt-5">
                {error && <p>{error.message}</p>}
                {isLoading && <ContentLoader />}
                {countries && countries.map((country, index) => (
                    <Country country={country} key={index} />
                ))}
            </div>
        </div>
  )
}
