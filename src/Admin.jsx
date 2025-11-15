import { useEffect } from "react"
import NavigationBar from "./NavigationBar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
const jobsurl = "http://localhost:3001/jobs"

function Admin() {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(jobsurl)
        .then(response=>response.json())
        .then((data)=>{
            setJobs(data)
        })
        .catch(error=>console.log(error))
    }, [])
    const navigate = useNavigate()

    return(
        <>
            <NavigationBar/>
            <h3>Welcome to the Admin Portal</h3>
            <h4>Select a Service to Change</h4>
            <div>
                {jobs.map((job) => (
                    <div key={job.id}>
                        <div>{job.job}</div>
                        <div>{job.hourlyrate}</div>
                        <div>{job.customerrating}</div>
                        <button onClick={() => navigate('adminediting')}>Edit this Service</button>  
                        <div>_</div>      
                    </div>
                ))}
            </div>
            <Outlet />
        </>
    )
}

export default Admin