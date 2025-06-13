import { BrowserRouter, Routes , Route} from "react-router-dom"
import UserLayout from "./components/layout/UserLayout"
import Home from "./components/pages/Home"
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
          <Route index element={<Home/>  }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
