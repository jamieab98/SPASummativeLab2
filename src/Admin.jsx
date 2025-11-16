import { useEffect } from "react"
import NavigationBar from "./NavigationBar"
import { useState } from "react"
const jobsurl = "http://localhost:3001/jobs"

function Admin() {
    const [jobs, setJobs] = useState([])
    const [editingService, setEditingService] = useState("")
    const [updatedPrice, setUpdatedPrice] = useState(0)
    const [updatedRanking, setupdatedRanking] = useState(0)
    

    useEffect(() => {
        fetch(jobsurl)
        .then(response=>response.json())
        .then((data)=>{
            setJobs(data)
        })
        .catch(error=>console.log(error))
    }, [jobs])

    const serviceList = jobs.map((job) => job.job)

    function handleSubmit(e) {
        e.preventDefault();
        const searchedService = jobs.find((job)=> (
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
            setJobs(data)
        })
        .catch(error=>console.log(error))
        setEditingService("")
        setUpdatedPrice(0)
        setupdatedRanking(0)
    }

    function handleDelete(){
        const serviceId = jobs.find((j) => (
            j.job.includes(editingService)
        ))
        fetch(`http://localhost:3001/jobs/${serviceId.id}`, {
            method: "DELETE"
        })
        .then(response=>response.json())
        .then((data) => {
            setJobs(data)
        })
        .catch(error => console.log(error))
    }

    return(
        <>
            <NavigationBar/>
            <h3>Welcome to the Admi n Portal</h3>
            <ul>
                {serviceList.map((service)=> (
                    <li key={service} onClick={() => {
                        setEditingService(service);
                    }}>{service}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>Service to Change</label>
                <input type="text" value={editingService} onChange={(e)=> setEditingService(e.target.value)} placeholer="Service"></input>
                <label>Update Price</label>
                <input type="number" value={updatedPrice} onChange={(e)=> setUpdatedPrice(e.target.value)}></input>
                <label>Update Customer Rating</label>
                <input type="number" value={updatedRanking} onChange={(e)=> setupdatedRanking(e.target.value)}></input>
                <button type="submit">Submit Changes</button>
                <button type="button" onClick={handleDelete}>Delete Service</button>
            </form>
        </>
    )
}

export default Admin