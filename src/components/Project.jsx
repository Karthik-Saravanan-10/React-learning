import { useEffect, useState } from "react";
import style from './Project.module.css'

import Props from "./Prop-post";

function Project() {
    let [entrySubmitData, setentrySubmitData] = useState([]);
    let [loadingData, setloadingData] = useState(false);
    useEffect(()=>{
        async function displayData() {
            let response=await fetch("http://localhost:8080/posts/");
            let jsonData=await response.json();
            let originalData=await jsonData.posts;
            setentrySubmitData(originalData)
            setloadingData(true)
        }

        displayData();
    },[]);
    function getDataInput(data) {
        fetch("http://localhost:8080/posts/",{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });
        setentrySubmitData((existingData) => [data, ...existingData]);
    }
    return (<>
        {/* {currentClick ?
            <Modelbox>
                <InputPost hideInput={isPost} dataInput={getDataInput} />
            </Modelbox> : null} */}
        {!(loadingData)?
        <p>Loading....</p>:
        <>
        {entrySubmitData.length == 0 ?
            <>
                <h3>There is No Value Present</h3>
                <p>Not yet</p>
            </> : false}
        <ul>
            {entrySubmitData.map((data) => <Props key={data.authorName} author={data.authorName} content={data.contentData} />)}
            {/* <Props author={currentAuthor} content={currentContent} /> */}
            {/* <Props author={entrySubmitData.authorName} content={entrySubmitData.contentData} /> */}
        </ul></>}
    </>)
}

export default Project;