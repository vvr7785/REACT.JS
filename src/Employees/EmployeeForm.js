import { useState } from 'react';
import './EmployeeForm.css'

import { useContext } from 'react';
import { EmployeeContext } from './employee-context';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../Store';
const EmployeeForm = (props) => {

   // const { onSaveExpenseData } = useContext(ExpenseContext);
   const dispatch = useDispatch();

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            name: enteredTitle,
            workexp: enteredAmount,
            date: new Date(enteredDate)
        }

        //console.log(expenseData);
        // props.onSaveExpenseData(expenseData);
        //onSaveExpenseData(expenseData);
        //dispatch({type:"ADD_EXPENSE", payload: expenseData});
        dispatch(employeeActions.addEmployee(expenseData));
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Name</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>


                <div className="new-expense__control">
                    <label>Work Experience</label>
                    <input type="number" min="1" onChange={amountChangeHandler} value={enteredAmount} />
                </div>

                <div className="new-expense__control">
                    <label>DateOfBirth</label>
                    <input type="date" min="1990-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>

            <div className="new-expense__controls">
                <button type="submit" > Add Employee </button>
            </div>
        </form>
    );
}

export default EmployeeForm;