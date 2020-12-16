import React from 'react'
// import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue;
            cursor: pointer;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
    span {
        color: red;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return(
        <Header>
            <h1>Rihard Alikhanov</h1>
            <h2><span>{allPosts}</span> записи, из них понравилось <span>{liked}</span></h2>
        </Header>
    )
}

export default AppHeader