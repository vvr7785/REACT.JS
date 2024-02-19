import { useState } from 'react';
import './EmployeeForm.css'
import { useDispatch } from 'react-redux';
import { employeeActions } from '../Store';
const EmployeeForm = (props) => {

   const dispatch = useDispatch();

    const [enteredName, setEnteredName] = useState('');
    const [enteredWE, setEnteredWE] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredWE(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const employeeData = {
            name: enteredName,
            workexp: enteredWE,
            dob: new Date(enteredDate),
            id: Math.random().toString()
        };

        // props.onSaveEmployeeData(employeeData);
        //onSaveEmployeeData(employeeData);
        //dispatch({type:"ADD_EMPLOYEE", payload: employeeData});
        dispatch(employeeActions.addEmployee(employeeData));
        
        setEnteredName('');
        setEnteredWE('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Name</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredName} />
                </div>


                <div className="new-expense__control">
                    <label>Work Experience</label>
                    <input type="number" min="1" onChange={amountChangeHandler} value={enteredWE} />
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