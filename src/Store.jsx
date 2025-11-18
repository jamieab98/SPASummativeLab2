import NavigationBar from "./NavigationBar"
import { useContext, useState } from "react"
import ServiceCard from "./ServiceCard"
import ServicesContext from "./ServicesContext"
import useFetchJobs from "./useFetchJobs"
import styles from "../src/cssmodules/Store.module.css"
const jobsurl = "http://localhost:3001/jobs"

function Store() {
    const {services} = useContext(ServicesContext)
    const [searchedService, setSearchedService] = useState("")
    const filteredServices = services.filter((service) => 
        service.job.toLowerCase().includes(searchedService.toLowerCase())
    )

    useFetchJobs(jobsurl);

    return(
        <>
            <NavigationBar />
            <div className={styles.store}>
            <div className={styles.servicesearchbar}>
                <div className={styles.searchheading}>List of Services</div>
                <input type="text" placeholder="Seach..." value={searchedService} onChange={(e)=>setSearchedService(e.target.value)} id="userSearch" data-testid="ServiceSearchBar" className={styles.searchinput}></input>
            </div>
            <div className={styles.servicescontainer}>
                {filteredServices.map((service) => (
                    <div key={service.id} className={styles.servicecard}>
                        <ServiceCard service={service}/>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Store