import NavigationBar from "./NavigationBar"
import styles from "../src/cssmodules/Home.module.css"
function Home() {

    return(
        <>
            <NavigationBar />
            <div className={styles.homecontainer}>
                <div className={styles.homeheading}>My Service Shop!</div>
                <div className={styles.homecontents}>
                    <div className={styles.homecontent}>Welcom to my service shop! We offer a wire variety to services that hopefully fit all of your needs. Check out our store where you can see our services, their prices, and our customer rating for those services!</div>
                    <div className={styles.homecontent}>We know that your life is special and everybody has unique needs. If our store doesn't have the exact service that you're looking for, do not worry! Head over to our Special Request page to add to our store. There, you will be able to submit a new service for us to offer!</div>
                </div>
            </div>
        </>
    )
}

export default Home