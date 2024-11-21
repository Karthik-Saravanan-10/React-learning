import style from './Project.module.css'

function Props({author,content}) {
    return(<>
        <li className={style.container}>
            <p className={style.author}>{author}</p>
            <p className={style.content}>{content}</p>
        </li>
        </>)
}

export default Props