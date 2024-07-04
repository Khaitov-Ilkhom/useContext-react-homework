import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./routes/home/Home.jsx";
import Users from "./routes/home/users/Users.jsx";
import FiredUser from "./routes/home/fired-user/FiredUser.jsx";


function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="" element={<Home/>}>
          <Route path="users" element={<Users/>}/>
          <Route path="fired-user" element={<FiredUser/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
