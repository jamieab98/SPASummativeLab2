import { useEffect, useId, useContext, useState } from "react"
import NavigationBar from "./NavigationBar"
import ServicesContext from "./ServicesContext"
import styles from "./cssmodules/Admin.module.css"
const jobsurl = "http://localhost:3001/jobs"

function Admin() {
    const {services, setServices} = useContext(ServicesContext)
    const [editingService, setEditingService] = useState("")
    const [updatedPrice, setUpdatedPrice] = useState(0)
    const [updatedRanking, setupdatedRanking] = useState(0)
    const [jobList, setJobList] = useState([])
    const AdminNameId = useId();
    const AdminRankingId = useId();
    const AdminPriceId = useId();
    

    useEffect(() => {
        fetch(jobsurl)
        .then(response=>response.json())
        .then((data)=>{
            setServices(data)
            setJobList(services.map((job=>job.job)))
        })
        .catch(error=>console.log(error))
    }, [services])

    function handleSubmit(e) {
        e.preventDefault();
        const searchedService = services.find((job)=> (
            job.job.toLowerCase()===editingService.toLowerCase()
        ))
        const serviceId = searchedService.id
        fetch(`http://localhost:3001/jobs/${serviceId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "hourlyrate": updatedPrice,
                "customerrating": updatedRanking
            })
        })
        .then(response=>response.json())
        .then((data)=>{
            setServices(data)
        })
        .catch(error=>console.log(error))
        setEditingService("")
        setUpdatedPrice(0)
        setupdatedRanking(0)
    }

    function handleDelete(){
        const serviceId = services.find((j) => (
            j.job.includes(editingService)
        ))
        fetch(`http://localhost:3001/jobs/${serviceId.id}`, {
            method: "DELETE"
        })
        .then(response=>response.json())
        .then((data) => {
            setServices(services.filter((s) => s.job !== data.job))
            setEditingService("")
        })
        .catch(error => console.log(error))
    }

    return(
        <>
            <NavigationBar/>
            <div className={styles.adminpage}>
            <div className={styles.admintitle}>Welcome to the Admin Portal</div>
            <ul className={styles.servicelist}>
                {jobList.map((service)=> (
                    <li key={service} onClick={() => {
                        setEditingService(service);
                    }}>{service}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className={styles.forminput}>
                <label htmlFor={AdminNameId}>Service to Change</label>
                <input type="text" value={editingService} onChange={(e)=> setEditingService(e.target.value)} placeholer="Service" id={AdminNameId}></input>
                <label htmlFor={AdminPriceId}>Update Price</label>
                <input type="number" value={updatedPrice} onChange={(e)=> setUpdatedPrice(e.target.value)} id={AdminPriceId}></input>
                <label htmlFor={AdminRankingId}>Update Customer Rating</label>
                <input type="number" value={updatedRanking} onChange={(e)=> setupdatedRanking(e.target.value)} id={AdminRankingId}></input>
                </div>
                <div className={styles.formbuttons}>
                <button type="submit" className={styles.formsubmit}>Submit Changes</button>
                <button type="button" onClick={handleDelete} className={styles.formdelete}>Delete Service</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default Admin