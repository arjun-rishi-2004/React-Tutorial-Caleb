import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role,setrole] = useState('dev')
  // console.log("Lets show the employee")
  let showEmp=true;
  // let role="dev"
  return (
    <div className="App bg-blue-300">
       
      { showEmp ? (

      <>
      <input type="text" onChange={(e)=>{
        console.log(e.target.value);
        // role=e.target.value;
        setrole(e.target.value)
      }}/>
     
      <Employee name="Arjun" role="Developer" />
      <Employee name="Rishi" role={role}  />
      <Employee/>
</>
      ):(
        <p>You cannot see the emps</p>
      )
}
    </div>
  );
}

export default App;
