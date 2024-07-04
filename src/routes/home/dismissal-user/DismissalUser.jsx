import "./DismissalUser.css"
import {useContext} from "react";
import AppContext from "../../../contex/store/index.jsx";
import { FaUserSlash } from "react-icons/fa";


const DismissalUser = () => {
    const [state, dispatch] = useContext(AppContext)

    const dismissalUsers = (id) => {
        dispatch({type: "REMOVE_USER", id})
    }

    return (
        <div className="wrapper">
            {
                state.map(user =>
                    <div key={user.id} className="user-card">
                        <img src={user.avatar} alt="User-image"/>
                        <div className="user-info">
                            <h2>{user.first_name} {user.last_name}</h2>
                            <p>{user.email}</p>
                            <button className="remove-user" onClick={() => dismissalUsers(user.id)}><FaUserSlash/></button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default DismissalUser
