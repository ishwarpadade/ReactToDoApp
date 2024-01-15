import ToDoItem from "./ToDoItem";

function ToDoItems({todoItems}){

    return(
<div className='items-container'>
    {todoItems.map(item=><ToDoItem  todoDate= {item.DueDate} todoName= {item.name}/>)}
    
</div>    
)
};

export default ToDoItems;