import Item from "./Item";
//here we can use destructuring instead of props like in ErrorMessage comp
//const FoodItem = ({foodItem}) =>{
const FoodItem = ({items}) =>{

    return (
    <ul className="list-group">
    { items.map((item)=>(
      <Item key={item} 
      foodItem={item} 
      handleBuyButton={()=> console.log(`${item} baught`)}/>
      ))}
  
  </ul>
    );
};
export default FoodItem;