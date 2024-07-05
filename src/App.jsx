import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./routes/home/Home.jsx";
import Users from "./routes/home/users/Users.jsx";
import DismissalUser from "./routes/home/dismissal-user/DismissalUser.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";


function App() {

  return (
    <div className="container">
        <Sidebar/>
      <Routes>
          <Route path="" element={<Home/>} />
          <Route path="users" element={<Users/>}/>
          <Route path="fired-user" element={<DismissalUser/>}/>
      </Routes>
    </div>
  )
}

export default App
