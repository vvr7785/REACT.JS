import EmployeeItem from "./EmployeeItem";
import './EmployeeList.css'

const EmployeeList = props => {
    if (props.items.length === 0) {
        return <h2 className="expense-list__fallback">Found No Employees</h2>
    }
    return (
        <div>
        <ul className="expense-list">
            {
                props.items.map((employee) => (<EmployeeItem 
                    key={employee.id} 
                    name={employee.name}
                    workexp={employee.workexp} 
                    date={employee.dob}
                    employeeID={employee.id} />))

                    
            }
            
            
        </ul>
        </div>
        
    )
}
export default EmployeeList;