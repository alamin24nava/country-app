import React from 'react'

export default function Country(props) {
    const country = props.country
    const handleRemove = (name) =>{
        props.onData(name)
    }
    return (
        <div className='col-3 mb-4'>
            <div className={'card' +' '+ country.name.common.toLowerCase()}>
                <div className='country-flag-wrap'><img src={country.flags.png} className="card-img-top h-100" alt={country.name.common} /></div>
                <div className="card-body">
                    <h6 className="card-title">Name: {country.name.common}</h6>
                    <h6>Population: <span className='fw-normal'>{country.population}</span> </h6>
                    <h6>Capital: <span className='fw-normal'>{country.capital}</span></h6>
                    <h6>Continents: <span className='fw-normal'>{country.continents}</span></h6>
                    <button className='btn btn-sm btn-danger' onClick={()=>{handleRemove(country.name.common)}}>Remove Country</button>
                </div>
            </div>
        </div>
    )
}
