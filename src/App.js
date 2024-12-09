import { useState } from "react"


function App() {
// her setNumber is a function
    const [number,setNumber] = useState(0)

const addNumber=()=>{
    setNumber(number+1);
   

}

const substractNumber=()=>{
  setNumber(number-1);

}

  return (
    <div className='container'> 
   <ul>
    <li><button onClick={addNumber}>Add</button></li>
    <li>{number}</li>
    <li><button onClick={substractNumber}>Substract</button></li>
   </ul>
    </div>
  )
}

export default App











