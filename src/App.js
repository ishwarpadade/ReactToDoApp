import AddToDo from './Component/AddToDo';
import AppName from './Component/AppName';
import ToDoItems from './Component/ToDoItems';
// import ListItemGroup from './Component/HealthyFood/ListItemGroup'
import "./App.css";
import { useState } from 'react';
import WelcomeMessage from './Component/WelcomeMessage';

function App() {

//const initialToDoItems=[];

const [todoItems,settodoItems]=useState([]);

const handleNewItem=(itemName,itemDueDate)=>{
  console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
const newToDoItems = [...todoItems,
  {name:itemName,dueDate:itemDueDate},
];
settodoItems(newToDoItems);
};

  return (
   <>
<center className="todo-container">
  <AppName/>
  <AddToDo onNewItem={handleNewItem}/>
  {todoItems.length===0&&<WelcomeMessage></WelcomeMessage>}
  <ToDoItems todoItems={todoItems}/>
</center>
{/* <ListItemGroup/> */}
   </>
  );
}

export default App;
