import { Link } from "react-router-dom"
function NavigationBar() {

    return(
        <>
            <div>
                <Link to="/about">About</Link>  |{" "}
                <Link to="/store">Store</Link>  |{" "}
                <Link to="/request">Request</Link>
            </div>
        </>
    )
}

export default NavigationBar