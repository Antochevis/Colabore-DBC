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
import LoadingBody from '../../components/loading/LoadingBody'


function Campaigns() {
  const [loading, setLoading] = useState(true)
  const [loadingBody, setLoadingBody] = useState(false)
  const [campanhas, setCampanhas] = useState()
  const [isMyContributions, setIsMyContributions] = useState(false)
  const [isMyCampaigns, setIsMyCampaigns] = useState(false)
  const [tags, setTags] = useState([]);
  const [isOpenCampaign, setIsOpenCampaign] = useState(false)
  const [isAllCampaigns, setIsAllCampaigns] = useState(false)
  const [isReachedGoals, setIsReachedGoals] = useState(false)
  const [isNotReachedGoals, setIsNotReachedGoals] = useState(false)

  const [showTag, setShowTag] = useState(false);
  const [searchTag, setSearchTag] = useState([]);
  const [listTagsDB, setListTagsDB] = useState([]);
  const navigate = useNavigate()
  const {userDatas} = useContext(AuthContext)

  const setup = async (filtroMeta) => {
    
    try {
      const {data} = await apiColabore.get(`/campanha/listarCampanhas?tipoFiltro=${filtroMeta ? filtroMeta : 'TODAS'}&minhasContribuicoes=${isMyContributions}&minhasCampanhas=${isMyCampaigns}${tags ? tags.map(tag => `&idTags=${tag.idTag}`).join('') : ''}`)
      setCampanhas(data)
    } catch (error) {
      
    }
    if(userDatas)
      await listTags()
      setLoading(false)
      setLoadingBody(false)
  }

  const handleShowTags = (tag) => {
    if(tag) {
      setTags([...tags, tag]);
    }

    showTag ? setShowTag(false) : setShowTag(true)

  }

  const listTags = async () => {
    try {
      const { data } = await apiColabore.get('/tag')
      
      setListTagsDB(data)

    } catch (error) {
      console.log(error)
    }
  }

  const handleMyContributionsFilter = () => {
    setLoadingBody(true)
    setIsAllCampaigns(false)
    setIsReachedGoals(false)
    setIsNotReachedGoals(false)
    setIsOpenCampaign(false)
    setIsMyContributions(!isMyContributions ? true : false)
  }

  const handleMyCampaignsFilter = () => {
    setLoadingBody(true)
    setIsAllCampaigns(false)
    setIsReachedGoals(false)
    setIsNotReachedGoals(false)
    setIsOpenCampaign(false)
    setIsMyCampaigns(!isMyCampaigns ? true : false)
  }

  const handleKeyDown = (e) => {
    if(e.key !== 'Enter') return
    const value = e.target.value 
    if(!value.trim() || !listTagsDB.includes(value)) return
    setTags([...tags, value])
    setSearchTag('')
    e.target.value = ''
  }

  const removeTag = (index) => {
    setLoadingBody(true)
    setTags(tags.filter((el, i) => i !== index))
  }

  useEffect(()=>{
    setup()
  },[userDatas, isMyContributions, isMyCampaigns, tags])
  
  const verifyOpenCampaigns = (campanha) => {
    const dateToFinished = new Date(campanha.dataLimite)
    const currentDate = new Date()
    const isFinished = currentDate > dateToFinished
    return !isFinished
  }

  const setOpenCampaigns = () => {
    setLoadingBody(true)
    setIsOpenCampaign(!isOpenCampaign ? true : false)
    setup('META_NAO_ATINGIDA')
  }

  const setAllCampaigns = () => {
    setLoadingBody(true)
    setIsAllCampaigns(!isAllCampaigns ? true : false)
    setup('TODAS')
  }

  const setReachedGoals = () => {
    setLoadingBody(true)
    setIsReachedGoals(!isReachedGoals ? true : false)
    setup('META_ATINGIDA')
  }

  const setNotReachedGoals = () => {
    setLoadingBody(true)
    setIsNotReachedGoals(!isNotReachedGoals ? true : false)
    setup('META_NAO_ATINGIDA')
  }

  if(loading) {
    return (<Loading />)
  } 
    return (
      <>
        <Header userName={userDatas.nome} userImg={userDatas.foto}/>
          <Section>
            <FilterTags>
              <TagsContainer>
              <input
              id='tags'
              autoComplete="off"
              value={searchTag}
              onChange={(e) => setSearchTag(e.target.value)} 
              name='tags'
              placeholder='Busque campanhas por categoria'
              onClick={() => handleShowTags()}
              onKeyDown={handleKeyDown}/>
              <ul className={showTag ? 'active' : ''}>
                {(showTag || searchTag.length > 0) && listTagsDB.map((tag, index) => (
                  <li key={index} onClick={() => setLoadingBody(true)}>
                    <span onClick={() => handleShowTags(tag)}>{tag.nomeTag}</span>
                  </li>
                ))}
              </ul>
              <div>
                {tags.map((tag, index) => (
                    <div key={index}>
                      <span>{tag.nomeTag} <span onClick={() => removeTag(index)}>&times;</span></span>
                    </div>
                ))}
              </div>
              <FaSearchDollar />
              </TagsContainer>
            </FilterTags>
            <FilterMeta>
              <Button
              disabled={isOpenCampaign || isReachedGoals || isNotReachedGoals} 
              id='todasCampanhas'
              width="310px"
              padding="22px"
              onClick={setAllCampaigns}>Todas campanhas</Button>
              <Button
              disabled={isAllCampaigns || isNotReachedGoals || isReachedGoals}
              id='campanhasAbertas'
              width="310px"
              padding="22px"
              onClick={setOpenCampaigns}>Campanhas Abertas</Button>
              <Button
              disabled={isOpenCampaign || isAllCampaigns || isNotReachedGoals}
              id='metaAtingida'
              width="310px"
              padding="22px"
              onClick={setReachedGoals}>Meta Atingida</Button>
              <Button
              disabled={isOpenCampaign || isAllCampaigns || isReachedGoals}
              id='metaNaoAtingida'
              width="310px"
              padding="22px"
              onClick={setNotReachedGoals}>Meta Não Atingida</Button>
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
              {loadingBody ?
              <><div></div><LoadingBody /></> :
              campanhas.length > 0 ? campanhas.map(campanha =>(
                isOpenCampaign ? verifyOpenCampaigns(campanha) &&
                <CardCampaign key={campanha.idCampanha}
                campanha={campanha}
                isMyContributions={isMyContributions}
                idUsuario={userDatas.idUsuario}
                />
                : <CardCampaign key={campanha.idCampanha}
                campanha={campanha}
                isMyContributions={isMyContributions}
                idUsuario={userDatas.idUsuario}
                />
              )
              ) : <><div></div><h1>Nenhuma campanha foi encontrada.</h1></>
              }
            </ContainerCards>  
          </Section>
        <Footer />
      </>
      
    )
}

export default Campaigns