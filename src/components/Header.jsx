import styles from './Header.module.css'
function Header(props) {
    return (<>
        <div className={styles.container}>
            <h3>React Poster</h3>
            <button onClick={props.clickEvent}>New Post</button>
        </div>
        <hr />
    </>)
}

export default Header;