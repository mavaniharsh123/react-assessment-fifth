import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <div className='navbar'>
                <Link to='/' href='#' className='headings'>HOME PAGE</Link>
                <Link to='students' href='#' className='headings'>STUDENTS</Link>
                <Link to='contactus' href='#' className='headings'>CONTACT US</Link>
            </div>
        </div>
    )
}

export default Header