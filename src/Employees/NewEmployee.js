import EmployeeForm from "./EmployeeForm";
import './NewEmployee.css'

const NewEmployee = ({children}) => {
 return (
    <div className="new-expense">
        {children}
        
    </div>
 );   
}

export default NewEmployee;