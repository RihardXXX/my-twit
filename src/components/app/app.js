import React from 'react';
import AppHeader from '../app-header/'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'

const App = () => {

    const data = [
        11,
        {label: "Learn React JS", important: true, id: "q"},
        {label: "Learn JS", important: false, id: "qw"},
        {label: "Learn Node JS", important: false, id: "qwe"},  
    ]

    return(
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>      
    );
};

export default App;