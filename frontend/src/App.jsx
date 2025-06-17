import { BrowserRouter, Routes , Route} from "react-router-dom"
import UserLayout from "./components/layout/UserLayout"
import Home from "./components/pages/Home"
import Leaderboard from "./components/pages/Leaderboard"
import UserDashboard from "./components/pages/UserDashboard"
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
          <Route index element={<Home/>  }/>
          <Route path="leaderboard" element={<Leaderboard/>  }/>
          
          <Route path="profile" element={<UserDashboard/>  }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
