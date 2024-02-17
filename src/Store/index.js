import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const DUMP_EMPLOYEES = [
    {id:1001,name:'Rahul',workexp:2,date:new Date(2000,5,11)},
    {id:1002,name:'Shiva',workexp:5,date:new Date(1996,4,16)},
    {id:1003,name:'Sudheer',workexp:10,date:new Date(1987,10,7)}
  ];

const initialState = {items:DUMP_EMPLOYEES};
const employeeSlice = createSlice({
  name:"employee",
  initialState: initialState,
  reducers:{
    addEmployee(state,action) {
      const employeeData = {
        ...action.payload,
        id: Math.random().toString()
      };
    state.items.push(employeeData);

    },
    removeEmployee(state,action){ 
    }
  }
});

export const sendEmployeeData = (employeeData) =>{
  return async (dispatch) =>{
    const sendRequest = async () =>{
      const response = await fetch('https://vishnu-vardhan-reddy-default-rtdb.firebaseio.com/employeedetails.json',{
        method: 'PUT',
        body: JSON.stringify(employeeData)
      });

      if(!response.ok){
        throw new Error("Sending employee data failed!");
      }
    };
    try{
      await sendRequest();
    }catch (error){
      console.log(error);
    }
  };
}

const EmployeeStore = configureStore({
  reducer:employeeSlice.reducer
});

export default EmployeeStore;
export const employeeActions = employeeSlice.actions;