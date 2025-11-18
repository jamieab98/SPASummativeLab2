import styles from "./cssmodules/ServiceCard.module.css"
function ServiceCard({service}) {

    return(
        <div className={styles.servicecard}>
            <h3>{service.job}</h3>
            <div>{service.description}</div>
            <div>Hourly Rate: ${service.hourlyrate}</div>
            <div>Customer Rating: {service.customerrating}</div>
        </div>
    )
}

export default ServiceCard