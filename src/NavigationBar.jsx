import { Link, Outlet } from "react-router-dom"
function NavigationBar() {

    return(
        <>
            <div>
                <Link to="/">Home</Link>  |{" "}
                <Link to="/store">Store</Link>  |{" "}
                <Link to="/request">Request</Link>
                <Outlet />
            </div>
        </>
    )
}

export default NavigationBar