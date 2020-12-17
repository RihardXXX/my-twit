import React, {Component} from 'react'
import { Button } from 'reactstrap';
import './post-status-filter.css'

export default class PostStatusFilter extends Component {

    constructor(props){
        super(props)

        this.buttons = [
            {name: 'all', label: 'все'},
            {name: 'like', label: 'понравилось'}
        ]
    }

    render(){
        const buttons = this.buttons.map(({name, label}) => { 
                const {filter, onFilterSelect} = this.props
                const active = filter === name; // цвет кнопки
                const clazz = active ? "btn-info" : "btn"
                return (<Button 
                            key={name} 
                            type="button" 
                            className={clazz}
                            onClick={() => onFilterSelect(name)}>{label}</Button>)
            }
        )

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }

}

