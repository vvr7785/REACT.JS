import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const DUMP_EMPLOYEES = [
  {id:1001,name:'Rahul',workexp:2,dob:new Date(2000,5,11)},
  {id:1002,name:'Shiva',workexp:5,dob:new Date(2001,4,16)},
  {id:1003,name:'Sudheer',workexp:10,dob:new Date(2001,10,7)}
];
const initialState = {items:DUMP_EMPLOYEES};

const emplopyeeSlice = createSlice({
  name:'employeedetails',
  initialState : initialState,
  reducers :{
    addEmployee(state, action) {
      const EmployeeData = {
        ...action.payload,
        id: Math.random().toString()
       };
 
      state.items.push(EmployeeData);
    },

    removeEmployee(state, action) {
      const employeeId = action.payload;
          state.items = state.items.filter(e => e.id !== employeeId);
    }
  }
});

export const sendEmployeeData = (employeeData) => {

  return async (dispatch) => {

    const sendRequest =  async () => {
      const response = await fetch('https://vishnu-vardhan-reddy-default-rtdb.firebaseio.com/employeedetails.json', 
      { method: 'PUT',
       body: JSON.stringify(employeeData),
     });

     if(!response.ok) {
      throw new Error("Sending employee data failed!");
     }

    };

    try {
        await sendRequest();
    }catch (error) {
        console.log(error);
    }
  };
}


const employeeStore = configureStore({
reducer: emplopyeeSlice.reducer
})

export default employeeStore;
export const employeeActions = emplopyeeSlice.actions;

export const deleteEmployeeData = (employeeId) => {
return async (dispatch) => {
    const sendRequest = async () => {
        const response = await fetch(`https://vishnu-vardhan-reddy-default-rtdb.firebaseio.com/employeedetails/${employeeId}.json`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error("Deleting employee data failed!");
        }
    };

    try {
        await sendRequest();
        dispatch(employeeActions.removeEmployee(employeeId));
    } catch (error) {
        console.log(error);
    }
};
};