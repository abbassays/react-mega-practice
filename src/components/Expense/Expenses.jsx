import { React, useState } from 'react'
import ExpenseItem from './ExpenseItem'
import FilterExpense from './FilterExpense'
import '../../assets/css/style.css'


const Expenses = (props) => {
    const list = props.expense
    const listItems = []
    for (const expense of list) {
        listItems.push(<ExpenseItem expense={expense} key={expense.id} />)
    }

    const [filterYear, setFilterYear] = useState('2020')
    const yearChange = (year) => {
        setFilterYear(year)
        return console.log(filterYear)
    }


    return (
        <div className='bg-gray-800 w-5/6 my-10 mx-auto rounded-xl py-4'>
            <div>
                <FilterExpense onYearChange={yearChange}
                    selectedYear={filterYear} />
            </div>

            <div>
                {listItems}
            </div>
        </div>
    )
}

export default Expenses
