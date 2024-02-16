import EmployeeItem from "./EmployeeItem";
import './EmployeeList.css'

const EmployeeList = props => {

    if (props.items.length === 0) {
        return <h2 className="expense-list__fallback">Found No Employees</h2>
    }
    return (
        <ul className="expense-list">
            {
                props.items.map((expense) => (<EmployeeItem 
                    key={expense.id} 
                    name={expense.name}
                    workexp={expense.workexp} 
                    date={expense.date} />))
            }
        </ul>
    )
}
export default EmployeeList;