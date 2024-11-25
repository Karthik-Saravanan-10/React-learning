import { useNavigate } from 'react-router-dom';

import styles from './Header.module.css'

function Modelbox({children}){
    let navigate=useNavigate();
    function closeHandler(){
        navigate('..')
    }
    return(<>
    <div className={styles.modeldiv} onClick={closeHandler}></div>
    <dialog open className={styles.moddialog}>{children}</dialog>
    </>)
}

export default Modelbox;