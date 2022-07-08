import { React, useState } from 'react'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const [amount, setAmount] = useState('')
    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

    const [date, setDate] = useState('')
    const dateHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: title,
            amount: amount,
            date: date,
            id: Math.random() * 100
        }
        props.newExpense(expenseData);
        // clear form
        setTitle('')
        setAmount('')
        setDate('')
    }


    return (
        <div className=''>
            <form onSubmit={submitHandler} className='items-center' >
                <div className='form-input flex flex-col items-center bg-inherit border-0 text-xl '>
                    <label className='pb-2 box-border text-gray-100'>Title</label>
                    <input onChange={titleHandler} value={title} className=' rounded-lg' type="text" name="title" placeholder='Title' />
                </div>
                <div className='form-input flex flex-col items-center bg-inherit border-0 text-xl '>
                    <label className='pb-2 box-border text-gray-100' >Amount</label>
                    <input onChange={amountHandler} value={amount} className=' rounded-lg' type="text" name="amount" placeholder="Amount" />
                </div>
                <div className='form-input flex flex-col items-center bg-inherit border-0 text-xl '>
                    <label className='pb-2 box-border text-gray-100' >Date</label>
                    <input onChange={dateHandler} value={date} className=' rounded-lg' type="date" name="date" />
                </div>
                <div className='form-input flex flex-col items-center bg-inherit border-0 text-lg '>
                    <button className=' text-gray-50 w-32 h-12 mt-4 hover:bg-slate-400 hover:text-gray-900 bg-slate-600 rounded-lg border-black border' type="submit">Add Expense</button>
                </div>

            </form>
        </div>
    )
}

export default ExpenseForm
