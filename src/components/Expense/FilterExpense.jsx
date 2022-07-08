import { React } from 'react'

const FilterExpense = (props) => {
    const yearHandler = (event) => {
        props.onYearChange(event.target.value)
    }

    return (
        <div className=' flex justify-between   mt-4'>
            <div className='w-1/3 mx-auto my-auto font-bold text-white text-2xl pl-2'>Filter By Year</div>
            <div className='w-1/3 flex mx-auto'>
                <select onChange={yearHandler} value={props.selectedYear}
                 className='w-1/2 text-black font-bold text-center rounded-lg ml-auto mr-2' name="" id="">
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
            </div>
        </div>
    )
}

export default FilterExpense
