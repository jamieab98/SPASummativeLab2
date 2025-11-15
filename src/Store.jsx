import NavigationBar from "./NavigationBar"
import { useEffect, useState } from "react"
import ServiceCard from "./ServiceCard"
const jobsurl = "http://localhost:3001/jobs"

function Store() {
    const [services, setServices] = useState([])

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