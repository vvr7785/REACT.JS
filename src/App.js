import './App.css';
import Employees from './Employees/Employees';
import NewEmployee from './Employees/NewEmployee';
import { useEffect} from 'react';
import EmployeeForm from './Employees/EmployeeForm';
import { useDispatch, useSelector } from 'react-redux';
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
      <div>
        <NewEmployee>
          <EmployeeForm />
        </NewEmployee>
        <Employees />
      </div>

  );
}
export default App;
