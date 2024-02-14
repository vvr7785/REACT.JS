import './App.css';
import Employees from './Employees/Employees'
import NewEmployees from './Employees/NewEmployees';

function App() {
  const data = [
    {id:1001,name:'Rahul',workexp:2,dob:new Date(2000,5,11)},
    {id:1002,name:'Shiva',workexp:5,dob:new Date(1996,4,16)},
    {id:1003,name:'Sudheer',workexp:10,dob:new Date(1987,10,7)}
  ];
  return (
    <div className='Main'>
      <div className='App1'>
        <NewEmployees/>
      </div>
    <div className="App2">
      <Employees details={data}/>
    </div>
    </div>
  );
}

export default App;
