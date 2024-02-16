import logo from './logo.svg';
import './App.css';
import EmployeeItem from './Employees/EmployeeItem';
import Employees from './Employees/Employees';
import NewEmployee from './Employees/NewEmployee';
import { useState } from 'react';
import EmployeeForm from './Employees/EmployeeForm';
import { EmployeeContext } from './Employees/employee-context';
import EmployeeContextProvider from './Employees/employee-context';


const App = () => {

  return (
    <EmployeeContextProvider >
      <div>
        <NewEmployee>
          <EmployeeForm />
        </NewEmployee>
        <Employees />
      </div>
    </EmployeeContextProvider>
  );
}
export default App;
