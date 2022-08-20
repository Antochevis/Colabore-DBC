import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiColabore } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleDonation = async(values, campanha, setOpenModal) => {
    try {
      await apiColabore.post(`/doador/${campanha.idCampanha}`, values)
      setOpenModal(false)
      toast.success('Contribuição realizada com sucesso!')

    } catch (error) {
      console.log(error)
      toast.error('Ocorreu um erro.')
    }
  }

  return (
    <CampaignContext.Provider value={{ redirectCampaign, getCampanhaById, campanhaById, handleDonation }}>
      {children}
      <ToastContainer />
    </CampaignContext.Provider>
  )

}

export { CampaignContext, CampaignProvider }