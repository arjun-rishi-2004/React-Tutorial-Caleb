import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role,setrole] = useState('dev')
  // console.log("Lets show the employee")
  let showEmp=true;
  // let role="dev"
  con
  return (
    <div className="App">
       
      { showEmp ? (

      <>
      <input type="text" onChange={(e)=>{
        console.log(e.target.value);
        // role=e.target.value;
        setrole(e.target.value)
      }}/>
     <div className='flex flex-wrap'>
      <Employee name="Arjun" role="Developer" img="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top"/>
      <Employee name="Rishi" role={role} img="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top" />
      <Employee/>
      <Employee name="Arjun" role="Developer" img="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top"/>
      <Employee name="Rishi" role={role} img="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top" />
      <Employee/>
      <Employee name="Arjun" role="Developer" img="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top"/>
      <Employee name="Rishi" role={role} img="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top" />
      <Employee/>
      </div>
</>
      ):(
        <p>You cannot see the emps</p>
      )
}
    </div>
  );
}

export default App;
