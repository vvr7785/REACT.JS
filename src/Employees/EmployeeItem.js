import EmployeeDate from './EmployeeDate';
import './EmployeeItem.css'
import Card from '../UI/Card';
import React, { useState } from 'react';

const EmployeeItem = (props) => {
    //let title = props.title;
    const [title, setTitle] = useState(props.name);
    return (
        <li>
            <Card className='expense-item'>
                <EmployeeDate date={props.date} />
                <div className="expense-item_description">
                    <h2>{title}</h2>
                    <div className="expense-item_price">{props.workexp} years</div>
                </div>
            </Card>
        </li>
    )
}
export default EmployeeItem;