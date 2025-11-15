import NavigationBar from "./NavigationBar"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4} from "uuid"
const jobsurl = "http://localhost:3001/jobs"

function Request() {
    const [newJobName, setNewJobName] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newPrice, setNewPrice] = useState(0)
    const newId = uuidv4();
    const navigate = useNavigate();

    function handleRequest(e){
        e.preventDefault();
        const newJob = {
            "id": newId,
            "job": newJobName,
            "description": newDescription,
            "hourlyrate": Number(newPrice),
            "customerrating": "0 Stars"
        }
        fetch(jobsurl, {
            method: "POST",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(newJob)
        })
        .then(response=>response.json())
        .then((data) => {
            navigate(`/store`)
        })
        .catch(error=>console.log(error))
        setNewJobName("")
        setNewDescription("")
        setNewPrice(0)
    }

    return(
        <>
            <NavigationBar />
            <h3>Create New Service</h3>
            <form onSubmit = {handleRequest}>
                <label>Job: </label>
                <input type="text" value={newJobName} onChange={(e)=>setNewJobName(e.target.value)} placeholder="Name of Job"/>
                <label>Decription: </label>
                <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="Description"/>
                <label>Hourly Rate Suggestion:</label>
                <input type="number" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}></input>
                <button type="submit">Request Job</button>
            </form>
        </>
    )
}

export default Request