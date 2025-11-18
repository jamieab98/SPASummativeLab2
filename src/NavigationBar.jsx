import { Link } from "react-router-dom"
import styles from "../src/cssmodules/Navigation.module.css"
function NavigationBar() {

    return(
        <>
            <div data-testid="NavigationBarDiv" className={styles.navigationbartabs}>
                <Link to="/" className={styles.navigationbartab}>Home</Link>
                <Link to="/store" className={styles.navigationbartab}>Store</Link>
                <Link to="/specialrequest" className={styles.navigationbartab}>Special Request</Link>
                <Link to="/admin" className={styles.navigationbartab}>Admin Portal</Link>
            </div>
        </>
    )
}

export default NavigationBar