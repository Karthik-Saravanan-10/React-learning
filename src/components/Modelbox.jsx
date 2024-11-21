import styles from './Header.module.css'
function Modelbox({children}){
    return(<>
    {/* <div className={styles.modeldiv} onClick={props.clickEvent}>hii</div> */}
    <dialog open className={styles.moddialog}>{children}</dialog>
    </>)
}

export default Modelbox;