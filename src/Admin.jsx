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
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        const searchedService = jobs.find((job)=> (
            job.job.toLowerCase()===editingService.toLowerCase()
        ))
        const serviceId = searchedService.id
        
    } 

    return(
        <>
            <NavigationBar/>
            <h3>Welcome to the Admin Portal</h3>
            <form onSubmit={handleSubmit}>
                <label>Which service are you changing?</label>
                <input type="text" value={editingService} onChange={(e)=> setEditingService(e.target.value)} placeholer="Service"></input>
                <label>Update Price</label>
                <input type="number" value={updatedPrice} onChange={(e)=> setUpdatedPrice(e.target.value)}></input>
                <label>Update Customer Rating</label>
                <input type="number" value={updatedRanking} onChange={(e)=> setupdatedRanking(e.target.value)}></input>
                <button type="submit">Submit Changes</button>
            </form>
        </>
    )
}

export default Admin