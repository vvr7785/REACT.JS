import './stylee.css'
import EmployeesDOB from "./EmployeesDOB";
function Employeesinfo(props){
    return (
        <div  className="App">
            <div>
            <EmployeesDOB date = {props.date}/>
            </div>
            {props.name}
            <div>
            {props.workexp}
            </div>
            
        </div>
    );
}
export default Employeesinfo;