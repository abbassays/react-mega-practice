import React from 'react'
import '../assets/css/style.css'

const Date = (props) => {
    const year = props.date.getFullYear()
    const month = props.date.toLocaleString('default', { month: 'long' });
    const day = props.date.getDate()

    return (
        <div className=' w-24 box-border m-4 p-2 flex flex-col border-2 rounded-2xl text-white bg-blue-600 text-center border-black'>
            <div>{year}</div>
            <div className='text-xl'>{month}</div>
            <div className='text-2xl'>{day}</div>
        </div>
    )
}

export default Date
