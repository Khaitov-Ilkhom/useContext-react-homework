import "./FiredUser.css"
import {useContext} from "react";
import AppContext from "../../../contex/store/index.jsx";
import {data} from "../../../user-data/user-data.js";

const FiredUser = () => {
    const [state, dispatch] = useContext(AppContext)

    console.log(state)
    return (
        <div className="wrapper">
            {
                state.map(user =>
                    <div key={user.id} className="user-card">
                        <img src={user.avatar} alt="User-image"/>
                        <div className="user-info">
                            <h2>{user.first_name} {user.last_name}</h2>
                            <p>{user.email}</p>
                            <button>nimadir</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default FiredUser
