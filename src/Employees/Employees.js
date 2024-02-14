import Employeesinfo from "./Employeesinfo"
function Employees(props){
    return (
        <div>
             <Employeesinfo name={props.details[0].name} workexp={props.details[0].workexp+' years'} date={props.details[0].dob}/>
            <Employeesinfo name={props.details[1].name} workexp={props.details[1].workexp+' years'} date={props.details[1].dob}/>
            <Employeesinfo name={props.details[2].name} workexp={props.details[2].workexp+' years'} date={props.details[2].dob}/>
        </div>
    );
}
export default Employees;