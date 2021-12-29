import React from 'react';

const Body = ()=>{
    return(
        <div className='body-container'>
            <div className='item-container'>
                <div className='d-flex flex-fill align-items-center'>
                    <img src={require('../../assets/images/icon.png')} className='icon' />
                    <div className='ms-3'>
                        <div className='item-title'>Front-End Developer</div>
                        <div className='item-subtitle'>Parcel</div>
                    </div>
                </div>
                <div className='d-flex flex-sm-fill justify-content-center align-items-center'>
                    <div className='item-subtitle'>Remote, NYC</div>
                </div>
                <div className='d-flex flex-wrap justify-content-start align-items-center tag-container'>
                    <div className='tag-item'>Non-Tech</div>
                    <div className='tag-item'>Sales</div>
                    <div className='tag-item'>Marketing</div>
                    <div className='tag-item'>Community Manager</div>
                </div>
                <div className='d-flex flex-sm-fill justify-content-end align-items-center'>
                    <div className='item-subtitle'>6d</div>
                    <div className='button-fill ms-4'>Apply</div>
                </div>
            </div>
        </div>
    )
}

export default Body