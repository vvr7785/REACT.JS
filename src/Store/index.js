import {createStore} from 'redux';

const DUMP_EMPLOYEES = [
    {id:1001,name:'Rahul',workexp:2,date:new Date(2000,5,11)},
    {id:1002,name:'Shiva',workexp:5,date:new Date(1996,4,16)},
    {id:1003,name:'Sudheer',workexp:10,date:new Date(1987,10,7)}
  ];

const expenseReducer = (state= {items: DUMP_EMPLOYEES}, action) => {
    const updatedExpenses = [...state.items]

    if(action.type === 'ADD_EXPENSE') {
        const expenseData = {
            ...action.payload,
            id: Math.random().toString()
          };
        updatedExpenses.push(expenseData)
        return {items:  updatedExpenses}
    }

    if(action.type === 'REMOVE_EXPENSE') {
        // logic to remove expense
    }
    return state;
}

const expenseStore = createStore(expenseReducer);

export default expenseStore;