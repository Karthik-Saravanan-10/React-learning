import Header from "../components/Header";
import { Outlet } from 'react-router-dom'

function Rootlayout() {
    return (<>
        <main>
            <Header />
        </main>
        <Outlet />
    </>)
}

export default Rootlayout;