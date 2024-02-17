import logo from './logo.svg';
import './App.css';
import EmployeeItem from './Employees/EmployeeItem';
import Employees from './Employees/Employees';
import NewEmployee from './Employees/NewEmployee';
import { useEffect, useState } from 'react';
import EmployeeForm from './Employees/EmployeeForm';
import { EmployeeContext } from './Employees/employee-context';
import EmployeeContextProvider from './Employees/employee-context';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { sendEmployeeData } from './Store';

const App = () => {

  const items = useSelector(state=>state.items);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(sendEmployeeData(items))
    },
    [items,dispatch]
  );

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
