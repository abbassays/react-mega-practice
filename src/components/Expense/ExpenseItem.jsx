import React from 'react'
import Date from './Date'
import '../../assets/css/style.css'


const ExpenseItem = (props) => {



    return (
        <div className='shadow-md shadow-zinc-700 flex my-10 mx-auto bg-blue-300 rounded-md sm:rounded-xl w-5/6 justify-between'>
            <div className=''>
                <Date date={props.expense.date} />
            </div>
            <div className='sm:text-2xl mr-auto sm:ml-2 ml-0  text-lg md:text-3xl font-bold my-auto'>
                {props.expense.title}
            </div>
            <div className='flex '>
                <div className='border-2 mr-2 sm:mr-6 ml-auto bg-green-900 border-black text-yellow-400 rounded-2xl box-border w-24 lg:w-32 text-sm md:text-xl sm:text-lg font-bold text-center p-4 my-auto'>
                    ${props.expense.amount}
                </div>
                {/* <button className='mr-4 p-2 border-black border-2 rounded-xl text-gray-900 hover:bg-red-700 font-bold bg-red-500 my-auto h-12 '>Edit Expense</button> */}
            </div>
        </div>
    )
}

export default ExpenseItem
