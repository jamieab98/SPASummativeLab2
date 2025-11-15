function ServiceCard({service}) {
    
    function handleBooking() {
        console.log(`${service.job} was booked`)
    }

    return(
        <>
            <h3>Service: {service.job}</h3>
            <div>Description: {service.description}</div>
            <div>Hourly Rate: ${service.hourlyrate}</div>
            <div>Customer Rating: {service.customerrating}</div>
        </>
    )
}

export default ServiceCard