import { NavLink } from 'react-router-dom';

import styles from './Header.module.css'

function Header({clickEvent}) {
    return (<>
        <div className={styles.container}>
            <h3>React Poster</h3>
            <NavLink to='/createPost'><button onClick={clickEvent}>New Post</button></NavLink>
        </div>
        <hr />
    </>)
}

export default Header;