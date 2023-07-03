import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [role,setrole] = useState('dev')
  // console.log("Lets show the employee")
  let showEmp=true;
  // let role="dev"
  const [employee,setEmployee]=useState(
    [
      {
        name:"Arjun",
        role:"Developer",
        img:"https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top"
      },
      {
        name:"Rishi",
        role:"Manager",
        img:"https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=400"
      }, {
        name:"Bruce",
        role:"Product Manager",
        img:"https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top"
      }, {
        name:"Stark",
        role:"Technician",
        img:"https://images.pexels.com/photos/11876188/pexels-photo-11876188.jpeg?auto=compress&cs=tinysrgb&w=400"
      }, {
        name:"Arjun",
        role:"Network Engineer",
        img:"https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top"
      }
    ]
  )
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
            {employee.map((emp)=>{
            // console.log(uuidv4())
               
              return (

              <Employee 
               key={uuidv4()}
              name={emp.name} 
               role={emp.role}
               img={emp.img} />
              )
            })
            }
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
