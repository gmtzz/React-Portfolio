import {Link,Outlet} from "react-router-dom"
import "./nav.css"

const Root = () => {
  return (
    <div>
        <ul className="nav">
            <li className="navItem">
                <Link to="/">Home</Link>
            </li>
            <li className="navItem">
                <Link to="/projects">Projects</Link>
            </li>
            <li className="navItem">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="navItem">
                <Link to="/resume">Resume</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Root