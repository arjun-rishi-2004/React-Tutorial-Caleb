import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("Lets show the employee")
  let showEmp='false';
  return (
    <div className="App">
      { showEmp ? (
      <>
      <Employee/>
      <Employee/>
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
