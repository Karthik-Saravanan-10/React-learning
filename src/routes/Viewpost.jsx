import Project from "../components/Project";
import { Outlet } from "react-router-dom";

function Viewpost() {
    return (<>
        <main>
            <Project />
        </main>
        <Outlet />
    </>)
}

export default Viewpost;