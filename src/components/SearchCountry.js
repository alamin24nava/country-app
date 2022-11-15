import React, { useState , useEffect} from 'react'

export default function SearchCountry(props) {
    const [searchCountry, setSearchCountry] = useState('')
    const handleChange=(e)=>{
        let value = e.target.value
        setSearchCountry(value)
    }
    useEffect(() => {
        props.onSearch(searchCountry)
    }, [searchCountry])
    
    return (
        <div className="mb-3 w-50 m-auto">
            <input type="text" className="form-control" name='searchCountry' onChange={handleChange} placeholder="Search Country" value={searchCountry}/>
        </div>
    )
}
