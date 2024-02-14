import { useState } from "react";
import "./EmployeeForm.css"
const EmployeeForms = () =>{
    const [enteredName,setEnteredName] = useState('');
    const [enteredWE,setEnteredWE] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const nameEventHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const weEventHandler = (event) =>{
        setEnteredWE(event.target.value);
    }
    const DateEventHandler = (event) =>{
        setEnteredDate(event.target.value);
    }
    const submitEventHandler = (event) =>{
        event.preventDefault();
        const employees = {
            name : enteredName,
            workexp : enteredWE,
            dob: enteredDate
        }
        console.log(employees);
        setEnteredName('');
        setEnteredWE('');
        setEnteredDate('');
           }
    return(
        <div>
            <form onSubmit={submitEventHandler} className="form">
                <br></br>
                <div>
                    <label>Name</label><br></br>
                    <input type="text" onChange={nameEventHandler} value={enteredName}/>
                </div>
                
                <div>
                    <label>Work Experience</label><br></br>
                    <input type="number" min='1'step='1' onChange={weEventHandler} value={enteredWE}/>
                </div>
                
                <div>
                    <label>DateofBirth</label><br></br>
                    <input type="date" min="1990-01-01" max="2024-12-31" onChange={DateEventHandler} value={enteredDate}/>
                </div>
                <div>
                    <button type="submit">Add Employee</button>
                </div>
            </form>
        </div>
    );
}
export default EmployeeForms;