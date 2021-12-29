import React from 'react';

const Header = ()=>{
    return(
        <div className='header-container'>
            <div className='sitename text-center'>Web3 Jobs</div>
            <div className='header-wrapper-bg'></div>
            <div className='header-wrapper pt-5'>
                <div className='title'>comprehensive job board for</div>
                <div className='title'>Web3 positions</div>
                <div className='sub-title'>Browse 8,130 jobs in Web3 at 910 Web3 Projects</div>
                <div className='d-flex flex-row justify-content-center'>
                    <div className='button-outline me-3'>Join Discord</div>
                    <div className='button-fill ms-3'>Post a Job</div>
                </div>
            </div>
            <div className='tag-container'>
                <div className='tag-item'>Web3 Js</div>
                <div className='tag-item'>Marketing</div>
                <div className='tag-item'>Go Lang</div>
            </div>
        </div>
    )
}

export default Header