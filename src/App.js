import  {BrowserRouter , Routes , Route} from "react-router-dom"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Home from "./pages/Home/Home"

const App = () => {
  return (
 <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signUp" element={<SignUp/>}/>

  </Routes>
 </BrowserRouter>
  )
}

export default App
