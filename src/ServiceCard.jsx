function ServiceCard({service}) {

    return(
        <>
            <h3>Service: {service.job}</h3>
            <div>Description: {service.description}</div>
            <div>Hourly Rate: {service.horlyrate}</div>
            <div>Customer Rating: {service.customerrating}</div>
        </>
    )
}

export default ServiceCard