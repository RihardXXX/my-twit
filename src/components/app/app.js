import React, {Component} from 'react';
import AppHeader from '../app-header/'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import nextId from "react-id-generator"

// import {app} from './app.module.css'
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            data : [
                11,
                {label: "Learn React JS", important: true, id: 1},
                {label: "Learn JS", important: false, id: 2},
                {label: "Learn Node JS", important: false, id: 3},  
            ]
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)

        this.maxId = 4
    }

    deleteItem(id){ // удаление элемента
        this.setState(({data}) => {
            // const index = data.findIndex((elem) => elem.id === id)
            // const before = data.slice(0, index)
            // const after = data.slice(index+1)
            // const result = [...before, ...after]
            const result = data.filter(elem => elem.id !== id)
            return {
                data: result
            }
        })
    }

    addItem(body){ // добавление элемента
        let htmlId = nextId();
        const newItem = {
            label: body,
            important: false,
            id: htmlId
        }
        this.setState(({data}) => {
            const result = [...data, newItem]
            return {
                data: result
            }
        })
    }

    render(){
        const {data} = this.state
        return(
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                posts={data}
                onDelete={this.deleteItem} />
                <PostAddForm onAdd={this.addItem} />
            </AppBlock>      
        )
    }

};

