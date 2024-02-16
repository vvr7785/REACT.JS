import { useState, useContext } from "react";
import Card from "../UI/Card";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeItem from "./EmployeeItem";
import "./Employees.css";
import EmployeeList from "./EmployeeList";
import { EmployeeContext } from "./employee-context";
import { useSelector } from "react-redux";

const Employees = (props) => {

    // const expenseCtx = useContext(ExpenseContext);
    // THIS FUCNTION WILL BE EXECUTED BY REACT REDUX WHEN YOU USE useSELECTOR
    // ReactREdux will automatically sets subscription for this component.
    const items = useSelector(state => state.items);

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <EmployeeFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <EmployeeList items={filteredExpenses} />
        </Card>
    )
}
export default Employees;