import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"



const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='criar-usuario' element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers