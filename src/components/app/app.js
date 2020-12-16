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
                {label: "Learn React JS", important: false, like: false, id: 1},
                {label: "Learn JS", important: false, like: false, id: 2},
                {label: "Learn Node JS", important: false, like: false, id: 3},  
            ],
            term: ''
        }

        this.deleteItem = this.deleteItem.bind(this) // биндим методы компонента
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.searchPost = this.searchPost.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)

        this.maxId = 4
    }

    deleteItem(id){ // удаление элемента
        this.setState(({data}) => {
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

    onToggleImportant(id){ // отмечены важные посты
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id) // индекс лайкнутого поста

            const oldPost = data[index] // берём старый объект
            const newPost = {...oldPost, important: !oldPost.important} // копируем стар объект меняя его статус лайка

            const newArr = [...data.slice(0, index), newPost, ...data.slice(index + 1)] // новый массив с новым объектом

            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id){ // лайкнутый пост
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id) // индекс лайкнутого поста

            const oldPost = data[index] // берём старый объект
            const newPost = {...oldPost, like: !oldPost.like} // копируем стар объект меняя его статус лайка

            const newArr = [...data.slice(0, index), newPost, ...data.slice(index + 1)] // новый массив с новым объектом

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term){ // функция по поиску поста
        if(items.length === 0){
            return items
        }
        // в каждом объекте ищем совпадения label и строки и возвращаем тот объект в кот есть совпадения
        return items.filter(item => item.label.indexOf(term) > -1)
    }

    onUpdateSearch(term){ // обновляем состояние state
        this.setState({term})
    }

    render(){
        const {data, term} = this.state
        const liked = data.filter(post => post.like).length // количество лайкнутых постов
        const allPosts = data.length // общее количество постов

        const visiblePosts = this.searchPost(data, term) // посты фильрируемые по поиску

        return(
            <AppBlock>
                <AppHeader
                liked={liked}
                allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter />
                </div>
                <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked} />
                <PostAddForm onAdd={this.addItem} />
            </AppBlock>      
        )
    }

};

