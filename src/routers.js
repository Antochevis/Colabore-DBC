import { useContext } from "react"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { AuthContext, AuthProvider } from "./context/AuthContext"
import Campaigns from "./pages/campaigns/Campaigns"
import Login from "./pages/login/Login"
import NotFound from "./pages/NotFound/NotFound"
import Register from "./pages/register/Register"

const PrivateRoute = () => {
  const {auth} = useContext(AuthContext)

  return (
    auth ? <Outlet/> : <Navigate to="/"/>
  )
}

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='criar-usuario' element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path='campanhas/:idUsuario' element={<Campaigns />} />
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers