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

  const setup = async () => {
    try {
      const {data} = await apiColabore.get('/campanha/listarCampanhas?tipoFiltro=TODAS&minhasContribuicoes=false&minhasCampanhas=false')
      setCampanhas(data)
      setLoading(false)
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
              <Button width="310px" padding="22px">Todas campanhas</Button>
              <Button width="310px" padding="22px">Meta Atingida</Button>
              <Button width="310px" padding="22px">Meta Não Atingida</Button>
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
                <CardCampaign campaignTitle={campanha.titulo}
                criador="Vitor Scheffer"
                tag={campanha.tags.map(tag => tag.nomeTag)}
                dataFinal={campanha.dataLimite}
                dataModificacao={campanha.ultimaAlteracao}
                arrecadado={campanha.arrecadacao}
                meta={campanha.meta}
                statusMeta={campanha.statusMeta}
                img={campanha.fotoCampanha}/>
              )
                )}
            </ContainerCards>  
          </Section>
        <Footer />
      </>
      
    )
}

export default Campaigns