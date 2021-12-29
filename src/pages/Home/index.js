import React, { useEffect, useState } from 'react';
import Header from './header';
import Body from './body';
import { homeApi } from 'apis'
import './style.scss';

const Main = ()=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        homeApi()
        .then(response => {
            if(response.success){
                setData(response.data)
            }
            else{
                alert(response.message)
            }
        })
    },[])

    return(
        <div id="Home">
            <Header />
            <Body data={data} />
        </div>
    )
}

export default Main