import NavigationBar from "./NavigationBar"
import { useEffect, useState } from "react"
import ServicesCard from "./ServicesCard"
const jobsurl = "http://localhost:3001/jobs"

function Store() {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(jobsurl)
        .then(response => response.json())
        .then((data) => {
            setServices(data)
            console.log(data)
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
                    <ServicesCard  />
                ))}
            </div>
        </>
    )
}

export default Store