import { useEffect, useState } from "react"
import { Card } from "../../components/card/Card"
import CardCampaignDetail from "../../components/card/CardCampaignDetail"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Loading from "../../components/loading/Loading"
import { Section } from "../../components/section/Section"
import { apiColabore } from "../../services/api"
import { ContainerDetail } from '../../components/card/Card'
import CardDetail from "../../components/card/CardDetail"


function CampaignsDetail() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const setup = async () => {
    try {
      const { data } = await apiColabore.get('usuario/listar')
      setUser(data[0])
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    setup()
  },[])

  if(loading) {
    return (<Loading />)
  } 
  return (
    <>
      <Header userName={user.nome}/>
        <Section>
          <ContainerDetail>
            <CardCampaignDetail
            campaignTitle="Doação de roupas"
            criador="Vitor Scheffer"
            tag="Alimentos"
            dataFinal="25/08/2022"
            descricao="lorem"
            />
            <CardDetail />
          </ContainerDetail>
        </Section>
      <Footer />
    </>
  )
}

export default CampaignsDetail