import "./Sidebar.css"
import {NavLink} from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUsers, FaUsersSlash } from "react-icons/fa";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="ul">
                <li><NavLink to=""> <IoHome/> </NavLink></li>
                <li><NavLink to="users"> <FaUsers/> </NavLink></li>
                <li><NavLink to="fired-user"> <FaUsersSlash/> </NavLink></li>
            </ul>
        </div>
    )
}
export default Sidebar
