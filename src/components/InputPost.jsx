import style from './InputPost.module.css'

function InputPost(props){
    return(<>
    <form>
        <label htmlFor="content">Write Something</label>
        <textarea name="" id="textContent" onInput={props.content}></textarea>
        <p>{props.content}</p>
        <label htmlFor="name">Name</label>
        <input type="text" id="inputName"  onInput={props.author}/>
    </form>
    </>)
}

export default InputPost;