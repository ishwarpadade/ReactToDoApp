import { useState } from "react";

function AddToDo({onNewItem}){

const [todoName,settodoName]= useState();
const[dueDate,setdueDate]=useState();

const handleNameChange=(event)=>{
settodoName(event.target.value);

};

const handleDateChange=(event)=>{
  setdueDate(event.target.value);
 
};

const handleOnButtonClick=()=>{
  onNewItem(todoName,dueDate);
  settodoName("");
  setdueDate("");
};
    return (
<div className="container">
  <div className="row">
    <div className="col-6">
      <input type='text' placeholder='Input Here' onChange= {handleNameChange} value={todoName}/>
    </div>
    <div className="col-4">
      <input type='date' onChange={handleDateChange} value={dueDate}/>
    </div>
    <div className="col-2">
      <button type='button' className='btn btn-success kg-button' onClick={handleOnButtonClick}>Add</button>
    </div>
  </div>

</div>
    )
}

export default AddToDo;