import style from './InputPost.module.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modelbox from '../components/Modelbox';

function InputPost({ hideInput, dataInput }) {
    let [currentAuthor, setcurrentAuthor] = useState('');
    let [currentContent, setcurrentContent] = useState('');
    function eventContentHandler(e) {
        setcurrentContent(e.target.value);
    }
    function eventAuthorHandler(e) {
        setcurrentAuthor(e.target.value);
    }
    function formSubmitted(e) {
        e.preventDefault();
        let personData = {
            authorName: currentAuthor,
            contentData: currentContent
        }
        dataInput(personData);
        hideInput();
    }
    return (<>
        <Modelbox>
            <form onSubmit={formSubmitted}>
                <label htmlFor="content">Write Something</label>
                <textarea name="" id="textContent" onInput={eventContentHandler}></textarea>
                {/* <p>{props.content}</p> */}
                <label htmlFor="name">Name</label>
                <input type="text" id="inputName" onInput={eventAuthorHandler} />
                <div className={style.divbtn}>
                    <NavLink to='..'>
                        <button type="button" className={style.cancelbtn} onClick={hideInput}>cancel</button>
                    </NavLink>
                    <button className={style.submitbtn}>submit</button>
                </div>
            </form>
        </Modelbox>
    </>)
}

export default InputPost;