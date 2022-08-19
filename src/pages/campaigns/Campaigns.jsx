import { useEffect, useState, useContext } from 'react'
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
import { FilterMeta, UserCampaignFilter, ActiveTittle } from './Campaigns.styled'
import { AuthContext } from '../../context/AuthContext'


function Campaigns() {
  const [loading, setLoading] = useState(true)
  const [campanhas, setCampanhas] = useState()
  const navigate = useNavigate()
  const {userDatas} = useContext(AuthContext)

  const setup = async (filtroMeta) => {
    try {
      const {data} = await apiColabore.get(`/campanha/listarCampanhas?tipoFiltro=${filtroMeta ? filtroMeta : 'TODAS'}&minhasContribuicoes=false&minhasCampanhas=false`)
      setCampanhas(data)
    } catch (error) {
      
    }
    if(userDatas)
      setLoading(false)
  }

  useEffect(()=>{
    setup()
  },[userDatas])

  if(loading) {
    return (<Loading />)
  } 
    return (
      <>
        <Header userName={userDatas.nome} userImg={userDatas.foto}/>
          <Section>
            <FilterMeta>
              <Button width="310px" padding="22px" onClick={() => setup('TODAS')}>Todas campanhas</Button>
              <Button width="310px" padding="22px" onClick={() => setup('META_ATINGIDA')}>Meta Atingida</Button>
              <Button width="310px" padding="22px" onClick={() => setup('META_NAO_ATINGIDA')}>Meta Não Atingida</Button>
            </FilterMeta>
            <UserCampaignFilter>
              <button>Minhas Campanhas</button>
              <button>Minhas contribuições</button>
            </UserCampaignFilter>
            <ActiveTittle>
              <Tittle>Todas campanhas</Tittle>
              <Button onClick={() => navigate('/criar-campanha')}>Criar campanha</Button>
            </ActiveTittle>
            <ContainerCards>
              {campanhas.map(campanha =>(
                <CardCampaign key={campanha.idCampanha}
                campanha={campanha}/>
              )
              )}
            </ContainerCards>  
          </Section>
        <Footer />
      </>
      
    )
}

export default Campaigns