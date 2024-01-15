import FoodItem from "./FoodItem";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import FoodInput from "./FoodInput";
import { useState } from "react";

function ListItemGroup(){

let [foodItems,setfoodItems]  = useState([]);

const OnKeyDown = (event) => {
    if(event.key==='Enter')
    {
    let newFoodItem =event.target.value;
    event.target.value="";
    let newItem=[...foodItems,newFoodItem]  ;  
    setfoodItems(newItem);
    }
};

    return(
        <>
<Container>
<h1 className="food-heading">Healthy Food</h1>

<FoodInput handleKeyDown={OnKeyDown}/>
<ErrorMessage items={foodItems}/>
<FoodItem items={foodItems}/>
</Container>

</>
);
};

export default ListItemGroup;