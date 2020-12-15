import React from 'react'
import { Button } from 'reactstrap';
import './post-status-filter.css'

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button type="button" className="btn btn-info">все</Button>
            <Button type="button" className="btn">понравилось</Button>
        </div>
    )
}

export default PostStatusFilter