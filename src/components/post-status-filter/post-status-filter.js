import React from 'react'
import './post-status-filter.css'

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">все</button>
            <button type="button" className="btn btn-primary">понравилось</button>
        </div>
    )
}

export default PostStatusFilter