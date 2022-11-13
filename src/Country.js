import React from 'react'

export default function Country(props) {
    const country = props.country
    return (
        <div className='col-3 mb-4'>
            <div className="card">
                <div className='country-flag-wrap'><img src={country.flags.png} className="card-img-top h-100" alt="..." /></div>
                <div className="card-body">
                    <h6 className="card-title">Name: {country.name.common}</h6>
                    <h6>Population: <span>{country.population}</span> </h6>
                    <h6>Capital: {country.capital}</h6>
                    <h6>Continents: {country.continents}</h6>
                </div>
            </div>
        </div>
    )
}
