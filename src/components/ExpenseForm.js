import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

    const titleChangeHandler = (e) => {
        setEnterTitle(e.target.value)

    }
    const amountChangeHandler = (e) => {
        setEnterAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setEnterDate(e.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault()

        const expenseData ={
            title :  enterTitle,
            amount : +enterAmount,
            date : new Date(enterDate) 

        }

        props.onSaveExpenseData(expenseData)
        setEnterTitle("")
        setEnterAmount("")
        setEnterDate("")

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enterAmount} onChange={amountChangeHandler} />
                </div> {/* here Value is varible name and we passed enteramount */}
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enterDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add  Expense</button>
            </div>
            
        </form>
    )
}
