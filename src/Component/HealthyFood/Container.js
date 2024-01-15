import style from './Container.module.css'

//Passing children
const Container=(props)=>{

    return <div className={style.container}>{props.children}</div>
}

export default Container;