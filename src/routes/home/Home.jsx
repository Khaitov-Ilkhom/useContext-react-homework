import "./Home.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import {data} from "../../user-data/user-data.js";



const Home = () => {
    return (
        <div className="home">
            <div className="homs">
                <div className="users-card">
                    {
                        data.map(user =>
                            <div key={user.id} className="user-card">
                                <img src={user.avatar} alt="User-image"/>
                                <div className="user-info">
                                    <h2>{user.first_name} {user.last_name}</h2>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="home-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Home
