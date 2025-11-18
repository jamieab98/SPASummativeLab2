import NavigationBar from "./NavigationBar"
import styles from "../src/cssmodules/Home.module.css"
function Home() {

    return(
        <>
            <NavigationBar />
            <div className={styles.homecontent}>
            <div className={styles.homeheading}>
                <h2>My Service Shop!</h2>
            </div>
            <div>
                <p>Please navigate through the page to see what service you might need.</p>
            </div>
            <div>
                <p>If you don't see the service that you're looking for, feel free to put in a special request through the special request tab!</p>
            </div>
            </div>
        </>
    )
}

export default Home