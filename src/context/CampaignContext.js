import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiColabore } from "../services/api";
import { Toaster, toast } from "react-hot-toast"


const CampaignContext = createContext();

const CampaignProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
      setAuth(false)
    } else {
      setLoading(false)
    }
  }, []);

  const redirectCampaign = async () => {
    try{
      const { data } = await apiColabore.get('/usuario/dadosUsuario')
      setAuth(true)
      navigate(`/campanhas/${data.idUsuario}`)
    } catch(e) {
      console.log(e)
      toast.error('Ops! Ocorreu algum erro.')
    }
  }

  if (loading) {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <CampaignContext.Provider value={{ redirectCampaign }}>
      {children}
      <Toaster />
    </CampaignContext.Provider>
  )

}

export { CampaignContext, CampaignProvider }