import "./Users.css"
import {useContext} from "react";
import AppContext from "../../../contex/store/index.jsx";
import {data} from "../../../user-data/user-data.js";
import { FaUserCheck } from "react-icons/fa";


const Users = () => {
    const [state, dispatch] = useContext(AppContext)

    console.log(state)
    const dismissalUser = (user) => {
        dispatch({type: "FIRED_USER", user})
    }
    return (
        <div className="wrapper">
            {
                data.map(user =>
                    <div key={user.id} className="user-card">
                        <img src={user.avatar} alt="User-image"/>
                        <div className="user-info">
                            <h2>{user.first_name} {user.last_name}</h2>
                            <p>{user.email}</p>
                            <button className="dismissal-user" onClick={() => dismissalUser(user)}><FaUserCheck/></button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Users
