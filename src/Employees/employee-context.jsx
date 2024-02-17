import { createContext, useReducer, useState } from 'react'

export const EmployeeContext = createContext({
    items: [],
    onSaveEmployeeData: () => { },
});

function employeeReducer(state, action) {
    const updatedEmployees = [...state]

    if(action.type === 'ADD_EMPLOYEE') {
        const employeeData = {
            ...action.payload,
            id: Math.random().toString()
          };
        updatedEmployees.push(employeeData)
    }

    if(action.type === 'REMOVE_EMPLOYEE') {
        // logic to remove employee
    }
    return updatedEmployees;
}

export default function EmployeeContextProvider({ children }) {

    const DUMP_EMPLOYEES = [
        {id:1001,name:'Rahul',workexp:2,date:new Date(2000,5,11)},
        {id:1002,name:'Shiva',workexp:5,date:new Date(1996,4,16)},
        {id:1003,name:'Sudheer',workexp:10,date:new Date(1987,10,7)}
      ];

    const [employees, dispatch] = useReducer(employeeReducer, DUMP_EMPLOYEES);


    const addEmployeeHandler = employee => {
        dispatch(
            {
                type: 'ADD_EMPLOYEE',
                payload: employee
            }
        );
    }

    const contextValue = {
        items: employees,
        onSaveEmployeeData: addEmployeeHandler
      };


      return <EmployeeContext.Provider value={contextValue}>
            {children}
      </EmployeeContext.Provider>
}