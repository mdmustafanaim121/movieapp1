import React from 'react'
import pageNotFoundImage from '../image/pageNotFound.jpg'

export default function pageNotFound() {
    return (
        <div className='loading'>
            <img src={pageNotFoundImage} alt='No such page exist'/>
        </div>
    )
}
