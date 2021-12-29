import React from 'react';

const Body = ({data})=>{
    return(
        <React.Fragment>
            <div className='body-container'>
                {
                    data.map((item,index)=><ItemContainer key={index} item={item} />)
                }
            </div>
            <div className='footer-container'>
                <div className='d-flex flex-row'>
                    <div className='d-flex flex-sm-fill justify-content-center align-items-center'>
                        <div className='client-feedback-title'>Our client speaks</div>
                    </div>
                    <div className='d-flex flex-sm-fill justify-content-center position-relative'>
                        <img src={require('../../assets/images/quote.png')} alt="quote" className='quote' />
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center testimonial-container'>
                    <img src={require('../../assets/images/testimonials.png')} alt="testimonials" className='testimonials' />
                </div>
                <div className='d-flex flex-row justify-content-center'>
                    <div className='button-outline me-3'>Join Discord</div>
                    <div className='button-fill ms-3'>Post a Job</div>
                </div>
            </div>
            <div className='copyright-seperator'></div>
            <div className='copyright'>©2022 DAOvelopers</div>
        </React.Fragment>
    )
}

const ItemContainer = ({item})=>{
    const itemData = JSON.parse(item[0])
    return(
        <div className='item-container'>
                <div className='d-flex flex-fill align-items-center'>
                    <img src={require('../../assets/images/icon.png')} alt="icon" className='icon' />
                    <div className='ms-3'>
                        <div className='item-title'>{itemData.title}</div>
                        <div className='item-subtitle'>{itemData.company}</div>
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
    )
}

export default Body