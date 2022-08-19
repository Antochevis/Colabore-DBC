import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiColabore } from "../services/api";
import { Toaster, toast } from "react-hot-toast"


const CampaignContext = createContext();

const CampaignProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [campanhaById, setCampanhaById] = useState()
  const navigate = useNavigate();

  const redirectCampaign = async () => {
    try{
      const { data } = await apiColabore.get('/usuario/dadosUsuario')
      navigate(`/campanhas/${data.idUsuario}`)
    } catch(e) {
      console.log(e)
      toast.error('Ops! Ocorreu algum erro.')
    }
  }

  const getCampanhaById = async (idCampanha) => {
    try {
      const {data} = await apiColabore.get(`campanha/campanhaPeloId?idCampanha=${idCampanha}`)
      console.log(data)
      setCampanhaById(data)
    } catch (error) {
    }
  }

  return (
    <CampaignContext.Provider value={{ redirectCampaign, getCampanhaById, campanhaById, loading, setLoading }}>
      {children}
      <Toaster />
    </CampaignContext.Provider>
  )

}

export { CampaignContext, CampaignProvider }