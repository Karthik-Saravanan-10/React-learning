import style from './Project.module.css'

function Props(props) {
    return(<>
        <li className={style.container}>
            <p className={style.author}>{props.author}</p>
            <p className={style.content}>{props.content}</p>
        </li>
        </>)
}

export default Props