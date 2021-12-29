import React, { useEffect } from 'react';
import Header from './header';
import Body from './body';
import { homeApi } from 'apis'
import './style.scss';

const Main = ()=>{

    useEffect(()=>{
        homeApi()
        .then(data=>{
            console.log('DATA >>>> ',data)
        })
    },[])

    return(
        <div id="Home">
            <Header />
            <Body />
        </div>
    )
}

export default Main