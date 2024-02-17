import EmployeeDate from './EmployeeDate';
import './EmployeeItem.css'
import Card from '../UI/Card';
import React, { useState } from 'react';

const EmployeeItem = (props) => {
    //let name = props.name;
    const [name, setName] = useState(props.name);
    return (
        <li>
            <Card className='expense-item'>
                <EmployeeDate date={props.date} />
                <div className="expense-item_description">
                    <h2>{name}</h2>
                    <div className="expense-item_price">{props.workexp} years</div>
                </div>
            </Card>
        </li>
    )
}
export default EmployeeItem;