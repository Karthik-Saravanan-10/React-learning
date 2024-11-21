import styles from './Header.module.css'
function Modelbox(props){
    return(<>
    <div className={styles.modeldiv} onClick={props.clickEvent}>hii</div>
    <dialog open className={styles.moddialog}>{props.children}</dialog>
    </>)
}

export default Modelbox;