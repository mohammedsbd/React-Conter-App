import { useState } from "react"


function App() {
// her setNumber is a function
    const [number,setNumber] = useState(0)



  return (
    <div className='container'> 
   <ul>
    <li><button onClick={()=>setNumber(number+1)}>Add</button></li>
    <li>{number}</li>
    <li><button onClick={()=>setNumber(number-1)}>Substract</button></li>
   </ul>
    </div>
  )
}

export default App











