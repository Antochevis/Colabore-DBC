import { useContext } from "react"
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { AuthContext, AuthProvider } from "./context/AuthContext"
import CampaignDonors from "./pages/campaignDonors/CampaignDonors"
import Campaigns from "./pages/campaigns/Campaigns"
import CampaignsDetail from "./pages/campaignsDetails/CampaignsDetail"
import CampaignsForm from "./pages/campaignsForm/CampaignsForm"
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
            <Route path='criar-campanha/' element={<CampaignsForm />} />
            <Route path='detalhe-campanha/' element={<CampaignsDetail />} />
            <Route path='doadores-campanha/' element={<CampaignDonors />} />
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers