import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import Loading from "../../../components/loading/Loading"
import { useEffect, useState, useContext } from "react"
import { apiColabore } from "../../../services/api"
import { Section } from "../../../components/section/Section"
import { DonorsContainer, DonorsInfos, DonorsList, DonorsListTitle } from "./CampaignDonors.Styled"
import { Button } from "../../../components/button/Button"
import { useNavigate } from "react-router-dom"
import { Card } from "../../../components/card/Card"
import { CampaignContext } from '../../../context/CampaignContext'

function CampaignDonors() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const {redirectCampaign} = useContext(CampaignContext)
  const navigate = useNavigate()

  const setup = async () => {
    try {
      const { data } = await apiColabore.get('usuario/dadosUsuario')
      setUser(data)
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
      <Header userName={user.nome} userImg={user.foto}/>
      <Section>
        <DonorsContainer>
          <Card maxWidth="420px" minHeight="0">
            <DonorsList>
              <DonorsListTitle>Contribuidores</DonorsListTitle>
              <DonorsInfos>
                <img src={user.foto} alt="" />
                <div>
                  <p>{user.nome}</p>
                  <p>Valor: {user.nome}</p>
                </div>
              </DonorsInfos>
              <Button onClick={() => window.history.go(-1)}>Voltar</Button>
            </DonorsList>
          </Card>
        </DonorsContainer>
      </Section>
      <Footer />
    </>
  )
}

export default CampaignDonors