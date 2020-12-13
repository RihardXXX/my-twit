import React from 'react';
import './post-add-form.css'

const PostAddForm = () => {
    return(
        <form className="bottom-panel d-flex">
            <input
                type='text'
                placeholder="о чём вы думаете сейчас"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавить
            </button>
        </form>
    )
}


export default PostAddForm