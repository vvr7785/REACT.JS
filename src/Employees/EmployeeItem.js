import EmployeeDate from './EmployeeDate';
import './EmployeeItem.css'
import Card from '../UI/Card';
import React, { useState } from 'react';
import DeleteData from './DeleteData';


const EmployeeItem = (props) => {
    
    const [name, setName] = useState(props.name);
    

    return (
        <li>
            <Card className='expense-item'>
                <EmployeeDate date={props.date} />
                <div className="expense-item_description">
                    <h2>{name}</h2>
                    <div className="expense-item_price">{props.workexp} years</div>
                    
                    <DeleteData employeeID = {props.employeeID}/>
                </div>
            </Card>
        </li>
    )
}
export default EmployeeItem;