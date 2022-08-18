import { useEffect, useState, useContext } from "react"
import { useParams } from 'react-router-dom'
import { AuthContext } from "../../../context/AuthContext"
import CardCampaignDetail from "../../../components/card/CardCampaignDetail"
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import Loading from "../../../components/loading/Loading"
import { Section } from "../../../components/section/Section"
import { apiColabore } from "../../../services/api"
import { ContainerDetail } from '../../../components/card/Card'
import CardDetail from "../../../components/card/CardDetail"


function CampaignsDetail() {
  const [campanha, setCampanha] = useState()
  const [loading, setLoading] = useState(true)
  const {idCampanha} = useParams()
  const {userDatas} = useContext(AuthContext)

  const setup = async () => {
    try {
      const {data} = await apiColabore.get(`campanha/campanhaPeloId?idCampanha=${idCampanha}`)
      setCampanha(data)
      setLoading(false)
    } catch (error) {
    }
    if(userDatas)
      setLoading(false)
  }

  console.log(campanha)

  useEffect(()=>{
    setup()
  },[])

  if(loading) {
    return (<Loading />)
  } 
  return (
    <>
      <Header userName={userDatas.nome} userImg={userDatas.foto}/>
        <Section>
          <ContainerDetail>
            <CardCampaignDetail
            campanha={campanha}
            />
            <CardDetail campanha={campanha}/>
          </ContainerDetail>
        </Section>
      <Footer />
    </>
  )
}

export default CampaignsDetail