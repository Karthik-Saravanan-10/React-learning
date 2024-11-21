import Props from "./Prop-post";
import InputPost from "./InputPost";
import { useState } from "react";
import Modelbox from "./Modelbox";


function Project(props) {
    let [currentAuthor, setcurrentAuthor] = useState('');
    let [currentContent, setcurrentContent] = useState('');
    function eventContentHandler(e) {
        setcurrentContent(e.target.value);
    }
    function eventAuthorHandler(e) {
        setcurrentAuthor(e.target.value);
    }
    return (<>
        {props.currentClick ?
            <Modelbox clickEvent={props.isPost}>
                <InputPost author={eventAuthorHandler} content={eventContentHandler} />
            </Modelbox> : null}
        <ul>
            <Props author={currentAuthor} content={currentContent} />
            <Props author="KN" content="Bye!" />
        </ul>
    </>)
}

export default Project;