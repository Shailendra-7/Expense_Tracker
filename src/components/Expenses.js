import React, { useState } from 'react'
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

export default function Expenses(props) {
    const [filteredYear, setFilteredYeard] = useState('2020')

    const filterChangeHandler=(selectedYear)=>{
        setFilteredYeard(selectedYear)

    }

    const filteredExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear
    })

    
    
    return (
        <div >
            
        <Card className='expenses'>
        <ExpenseFilter  selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
        <ExpensesChart expenses ={filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/> 
        </Card>
        </div>
    )
}
