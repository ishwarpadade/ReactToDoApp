import style from './Item.module.css'

const Item=({foodItem, handleBuyButton})=>{

    // const handleBuyButtonClicked=(foodItem)=> {

    //     console.log(`${foodItem} beig bought.`)
    // }

    return(
        <li className={`${style["kg-item"]} list-group-item`}>
          <span className={style["kg-span"]}>  {foodItem}</span>
          <button className={`${style.button} btn btn-info`} onClick={handleBuyButton}>Buy</button>
        </li>
    );
};

export default Item;