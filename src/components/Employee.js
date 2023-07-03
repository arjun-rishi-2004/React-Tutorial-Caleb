function Employee(props){
return(
    <>
    <h3>Employee {props.name}</h3>
        {/* { <p>
            {
        props.role ?
        (<p>{props.role}</p>)
        :
        (<p>No role</p>)
        }
    </p> } */}
    <p class="bg-gray-500">{props.role ?props.role:'No role'}</p>
</>
)
}


export default Employee;