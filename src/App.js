import './App.css';
import Employees from './Employees'

function App() {
  const data = [
    {id:1001,name:'Rahul',workexp:2,dob:new Date(2000,5,11)},
    {id:1002,name:'Shiva',workexp:5,dob:new Date(1996,4,16)},
    {id:1003,name:'Sudheer',workexp:10,dob:new Date(1987,10,7)}
  ];
  return (
    <div className="App">
      <Employees details={data}/>
    </div>
  );
}

export default App;
