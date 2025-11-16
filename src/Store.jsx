import NavigationBar from "./NavigationBar"
import { useEffect, useContext, } from "react"
import ServiceCard from "./ServiceCard"
import ServicesContext from "./ServicesContext"
const jobsurl = "http://localhost:3001/jobs"

function Store() {
    const {services, setServices} = useContext(ServicesContext)


    useEffect(() => {
        fetch(jobsurl)
        .then(response => response.json())
        .then((data) => {
            setServices(data)
        })
        .catch(error => console.log(error))
    }, [])

    return(
        <>
            <NavigationBar />
            <div>
                <h2>List of Services</h2>
                <input type="text" placeholder="Seach..."></input>
            </div>
            <div>
                {services.map((service) => (
                    <div key={service.id}>
                        <ServiceCard service={service}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Store