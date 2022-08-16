import { useEffect, useState } from 'react'
import { apiColabore } from '../../services/api'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Section } from '../../components/section/Section'
import CardCampaign from '../../components/card/CardCampaign'
import { ContainerCards } from '../../components/card/Card'
import { Button } from '../../components/button/Button'
import { Tittle } from '../../consts'
import Loading from '../../components/loading/Loading'
import { useNavigate } from 'react-router-dom'
import { FilterMeta } from './Campaigns.styled'

function Campaigns() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

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

  function goToCampaignForm() {
    navigate('/criar-campanha')
  }
  
  if(loading) {
    return (<Loading />)
  } 
    return (
      <>
        <Header userName={user.nome}/>
          <Section>
            <FilterMeta>
              <Button width="310px" padding="22px">Todas campanhas</Button>
              <Button width="310px" padding="22px">Meta Atingida</Button>
              <Button width="310px" padding="22px">Meta Não Atingida</Button>
            </FilterMeta>
            <Tittle>Todas campanhas</Tittle>
            <Button onClick={goToCampaignForm}>Criar campanha</Button>
            <ContainerCards>
              <CardCampaign campaignTitle="Doação de roupas para sav..."
              criador="Vitor Scheffer"
              tag="Alimentos"
              dataFinal="25/08/2022"
              arrecadado="1500"
              meta="2000"/>
              <CardCampaign campaignTitle="Dinheiro pro Neymar Jr"
              criador="João Andrey"
              tag="Alimentos"
              dataFinal="25/08/2022"
              arrecadado="1500"
              meta="2000"/>
              <CardCampaign campaignTitle="Doação de roupas"
              criador="Vitor Scheffer"
              tag="Alimentos"
              dataFinal="25/08/2022"
              arrecadado="1500"
              meta="2000"/>
              <CardCampaign campaignTitle="Doação de roupas"
              criador="João Andrey"
              tag="Alimentos"
              dataFinal="25/08/2022"
              arrecadado="1500"
              meta="2000"/>
              <CardCampaign campaignTitle="Doação de roupas"
              criador="Vitor Scheffer"
              tag="Alimentos"
              dataFinal="25/08/2022"
              arrecadado="1500"
              meta="2000"/>
              <CardCampaign campaignTitle="Doação de roupas"
              criador="João Andrey"
              tag="Alimentos"
              dataFinal="25/08/2022"
              arrecadado="1500"
              meta="2000"/>
            </ContainerCards>  
          </Section>
        <Footer />
      </>
      
    )
}

export default Campaigns