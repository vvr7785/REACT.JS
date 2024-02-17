import { createContext, useReducer, useState } from 'react'

export const EmployeeContext = createContext({
    items: [],
    onSaveExpenseData: () => { },
});

function expenseReducer(state, action) {
    const updatedExpenses = [...state]

    if(action.type === 'ADD_EXPENSE') {
        const employeeData = {
            ...action.payload,
            id: Math.random().toString()
          };
        updatedExpenses.push(employeeData)
    }

    if(action.type === 'REMOVE_EMPLOYEE') {
        // logic to remove employee
    }
    return updatedExpenses;
}

export default function EmployeeContextProvider({ children }) {

    const DUMP_EMPLOYEES = [
        {id:1001,name:'Rahul',workexp:2,date:new Date(2000,5,11)},
        {id:1002,name:'Shiva',workexp:5,date:new Date(1996,4,16)},
        {id:1003,name:'Sudheer',workexp:10,date:new Date(1987,10,7)}
      ];

    const [employees, dispatch] = useReducer(expenseReducer, DUMP_EMPLOYEES);

    //const [expenses, setExpenses] = useState(DUMP_EXPENSES);

    const addExpenseHandler = expense => {
        dispatch(
            {
                type: 'ADD_EXPENSE',
                payload: expense
            }
        );
    }

    const contextValue = {
        items: employees,
        onSaveExpenseData: addExpenseHandler
      };


      return <EmployeeContext.Provider value={contextValue}>
            {children}
      </EmployeeContext.Provider>
}