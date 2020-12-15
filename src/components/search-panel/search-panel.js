import React from 'react'


import './search-panel.scss'

const SearchPanel = () => {
    return (
        <input 
        className="form-control search-input"
        type="text"
        placeholder="поиск по записям"
        />
    )
}

export default SearchPanel