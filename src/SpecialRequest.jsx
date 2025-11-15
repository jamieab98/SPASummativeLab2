import NavigationBar from "./NavigationBar"
import { useState, useId } from "react";
const jobsurl = "http://localhost:3001/jobs"

function Request() {
    const [newJobName, setNewJobName] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newPrice, setNewPrice] = useState(0)
    const newId = useId();

    function handleRequest(e){
        e.preventDefault();
        const newJob = {
            "id": newId,
            "job": newJobName,
            "description": newDescription,
            "hourlyrate": newPrice,
            "customerrating": "0 Stars"
        }
        fetch(jobsurl, {
            method: "POST",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(newJob)
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
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