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
import { FilterMeta, UserCampaignFilter, ActiveTittle, FilterTags, TagsContainer } from './Campaigns.styled'
import { AuthContext } from '../../context/AuthContext'
import { FaSearchDollar } from 'react-icons/fa'


function Campaigns() {
  const [loading, setLoading] = useState(true)
  const [campanhas, setCampanhas] = useState()
  const [isMyContributions, setIsMyContributions] = useState(false)
  const [isMyCampaigns, setIsMyCampaigns] = useState(false)
  const [tags, setTags] = useState([]);
  const navigate = useNavigate()
  const {userDatas} = useContext(AuthContext)

  const setup = async (filtroMeta) => {
    try {
      const {data} = await apiColabore.get(`/campanha/listarCampanhas?tipoFiltro=${filtroMeta ? filtroMeta : 'TODAS'}&minhasContribuicoes=${isMyContributions}&minhasCampanhas=${isMyCampaigns}`)
      setCampanhas(data)
    } catch (error) {
      
    }
    if(userDatas)
      setLoading(false)
  }

  const handleMyContributionsFilter = () => {
    setIsMyContributions(!isMyContributions ? true : false)
  }

  const handleMyCampaignsFilter = () => {
    setIsMyCampaigns(!isMyCampaigns ? true : false)
  }

  const handleKeyDown = (e) => {
    if(e.key !== 'Enter') return
    const value = e.target.value 
    if(!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index))
  }

  useEffect(()=>{
    setup()
  },[userDatas, isMyContributions, isMyCampaigns, tags])

  if(loading) {
    return (<Loading />)
  } 
    return (
      <>
        <Header userName={userDatas.nome} userImg={userDatas.foto}/>
          <Section>
            <FilterTags>
              <TagsContainer>
              <input id='tags' name='tags' placeholder='Busque campanhas por categoria' onKeyDown={handleKeyDown}/>
              <div>
                {tags.map((tag, index) => (
                    <div key={index}>
                      <span>{tag} <span onClick={() => removeTag(index)}>&times;</span></span>
                    </div>
                ))}
              </div>
              <FaSearchDollar />
              </TagsContainer>
            </FilterTags>
            <FilterMeta>
              <Button id='todasCampanhas' width="310px" padding="22px" onClick={() => setup('TODAS')}>Todas campanhas</Button>
              <Button id='metaAtingida' width="310px" padding="22px" onClick={() => setup('META_ATINGIDA')}>Meta Atingida</Button>
              <Button id='metaNaoAtingida' width="310px" padding="22px" onClick={() => setup('META_NAO_ATINGIDA')}>Meta Não Atingida</Button>
              <Button id='campanhasAbertas' width="310px" padding="22px" onClick={() => setup('META_NAO_ATINGIDA')}>Campanhas Abertas</Button>
            </FilterMeta>
            <UserCampaignFilter>
              <div>
                <button
                id='minhasCampanhas'
                onClick={handleMyCampaignsFilter}
                className={isMyCampaigns ? 'active' : 'left'}
                disabled={isMyContributions}
                >Minhas Campanhas</button> 
              </div>
              <div>
                <button
                id='minhasContribuições'
                onClick={handleMyContributionsFilter}
                className={isMyContributions ? 'active' : 'right'}
                disabled={isMyCampaigns}
                >Minhas contribuições</button>                
              </div>
            </UserCampaignFilter>
            <ActiveTittle>
              <Tittle>{isMyCampaigns ? 'Minhas Campanhas' : isMyContributions? 'Minhas Contribuições' : 'Todas campanhas'}</Tittle>
              <Button id='criarCampanha' onClick={() => navigate('/criar-campanha')}>Criar campanha</Button>
            </ActiveTittle>
            <ContainerCards>
              {campanhas.length > 0 ? campanhas.map(campanha =>(
                <CardCampaign key={campanha.idCampanha}
                campanha={campanha}/>
              )
              ) : <><h1>Nenhuma campanha foi encontrada.</h1></>}
            </ContainerCards>  
          </Section>
        <Footer />
      </>
      
    )
}

export default Campaigns