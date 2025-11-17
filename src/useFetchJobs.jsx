import { useContext, useEffect } from "react";
import ServicesContext from "./ServicesContext";

function useFetchJobs(jobsurl){
    const {setServices} = useContext(ServicesContext)
    useEffect(()=>{
        fetch(jobsurl)
        .then(response=>response.json())
        .then(data=>setServices(data))
        .catch(error=>console.log(error))
    }, [])
}

export default useFetchJobs