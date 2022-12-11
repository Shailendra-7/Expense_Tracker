import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {

  const [setForm , addForm ] = useState(false)

  const SetFormHandler = ()=>{
    addForm(true)
  }

  const SetCanncelHandler=()=>{
    addForm(false)
  }
  const SaveExpenseDataHandler =(enteredExpenseData)=>{

      const expenseData ={
        ...enteredExpenseData,
        id : Math.random().toString()
      }
      
      props.onAddExpense(expenseData)
      addForm(false)
    
  }
  return (
    <div className='new-expense'>
      {!setForm && <button onClick={SetFormHandler}>Add New Expense</button>}
     {setForm && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={SetCanncelHandler}/>}
    </div>
  )
}
