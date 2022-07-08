import React from 'react'
import Date from './Date'
import '../assets/css/style.css'

const ExpenseItem = (props) => {



    return (
        <div className='shadow-md shadow-zinc-700 flex my-10 mx-auto bg-blue-300 rounded-xl w-5/6  justify-between'>
            <div >
                <Date date={props.expense.date} />
            </div>
            <div className='text-3xl my-auto'> {props.expense.title}</div>
            <div className='border-2 bg-green-900 border-black text-yellow-400 rounded-2xl box-border w-32  font-bold  text-center text-xl p-4 mr-6 my-auto'>${props.expense.amount}</div>
        </div>
    )
}

export default ExpenseItem
