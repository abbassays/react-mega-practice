import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const addNewExpense = (expense) => {
        props.onAddExpense(expense)
    }
    return (
        <div className='bg-gray-800 w-5/6 mx-auto my-4 rounded-xl py-4'>
            <ExpenseForm newExpense={addNewExpense} />
        </div>
    )
}

export default NewExpense
