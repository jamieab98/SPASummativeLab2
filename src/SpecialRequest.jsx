import NavigationBar from "./NavigationBar"
function Request() {
    function handleRequest(e){
        e.preventDefault();
        console.log("Form submitted")
    }

    return(
        <>
            <NavigationBar />
            <h3>Create New Service</h3>
            <form onSubmit = {handleRequest}>
                <label>Job: </label>
                <input type="text" placeholder="Name of Job"/>
                <label>Decription: </label>
                <input type="text" placeholder="Description"/>
                <label>Hourly Rate Suggestion:</label>
                <input type="number"></input>
                <button type="submit">Request Job</button>
            </form>
        </>
    )
}

export default Request