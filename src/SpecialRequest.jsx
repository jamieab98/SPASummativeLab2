import NavigationBar from "./NavigationBar"
import { useState, useId} from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4} from "uuid"
const jobsurl = "http://localhost:3001/jobs"

function Request() {
    const [newJobName, setNewJobName] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newPrice, setNewPrice] = useState(0)
    const newId = uuidv4();
    const navigate = useNavigate();
    const NameId = useId();
    const DescriptionId = useId();
    const PriceId = useId();

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
                <label htmlFor={NameId}>Job: </label>
                <input type="text" value={newJobName} onChange={(e)=>setNewJobName(e.target.value)} placeholder="Name of Job" id={NameId}/>
                <label htmlFor={DescriptionId}>Decription: </label>
                <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="Description" id={DescriptionId}/>
                <label htmlFor={PriceId}>Hourly Rate Suggestion:</label>
                <input type="number" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)} id={PriceId}></input>
                <button type="submit">Request Job</button>
            </form>
        </>
    )
}

export default Request