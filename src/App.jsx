// import Post from './components/Post'
// import Props from './components/Prop-post'
import Project from "./components/Project";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  let [currentClick, setcurrentClick] = useState(true);
  function onClickEvent() {
    setcurrentClick(true);
  }

  function onStopClickEvent() {
    setcurrentClick(false);
  }

  return (
    <>
      <Header clickEvent={onClickEvent} />
      <main>
        <Project currentClick={currentClick} isPost={onStopClickEvent} />
      </main>
    </>
  )
}

export default App
