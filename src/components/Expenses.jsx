import React from 'react'
import ExpenseItem from './ExpenseItem'
import '../assets/css/style.css'

const Expenses = (props) => {
    const list = props.expense
    const listItems = []
    for (const expense of list) {
        listItems.push(<ExpenseItem expense={expense} />)
    }

    return (
        <div className='bg-gray-800 py-4'>
            {listItems}
        </div>
    )
}

export default Expenses
