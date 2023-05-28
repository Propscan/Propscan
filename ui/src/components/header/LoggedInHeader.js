import React from 'react'

import "./header.css"
import SearchbarHeader from '../searchbar/SearchbarHeader'


export default function LoggedInHeader() {
    return (
        <div className='logged-in-header'>
                <div>
                    <img style={{width:"60px", height:"auto"}} src='images/logo.png' />
                    <img style={{width:"90px", height:"auto"}} src='images/propscan.png' />
                    <span className='header-com'>.com</span>
                </div>
                <SearchbarHeader />
            {/* <div>
                <Searchbar />
            </div> */}
        </div>
    )
}
