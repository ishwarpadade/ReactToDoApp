import style from './FoodInput.module.css'

const FoodInput=({handleKeyDown})=>{

    return(
        <input className={style.foodInput} type="text" placeholder="Enter Food Item" 
        onKeyDown={handleKeyDown}>

        </input>
    )
}

export default FoodInput;