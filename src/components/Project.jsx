import Props from "./Prop-post";
import InputPost from "./InputPost";
import { useState } from "react";
import Modelbox from "./Modelbox";


function Project({isPost,currentClick}) {
    let [entrySubmitData,setentrySubmitData]=useState([]);
    function getDataInput(data){
        setentrySubmitData((existingData)=>[data,...existingData]);
    }
    return (<>
        {currentClick ?
            <Modelbox>
                <InputPost hideInput={isPost} dataInput={getDataInput}/>
            </Modelbox> : null}
        {entrySubmitData.length==0?
        <h1>There is No Value Present</h1>:false}
        <ul>
            {entrySubmitData.map((data)=><Props key={data.authorName} author={data.authorName} content={data.contentData} />)}
            {/* <Props author={currentAuthor} content={currentContent} /> */}
            {/* <Props author={entrySubmitData.authorName} content={entrySubmitData.contentData} /> */}
        </ul>
    </>)
}

export default Project;