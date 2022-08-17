import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Loading from "../../components/loading/Loading"
import { useEffect, useState } from "react"
import { apiColabore } from "../../services/api"
import { Section } from "../../components/section/Section"
import { DonorsContainer, DonorsInfos, DonorsList, DonorsListTitle } from "./CampaignDonors.Styled"
import { Button } from "../../components/button/Button"
import { useNavigate } from "react-router-dom"

function CampaignDonors() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
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
          <DonorsList>
            <DonorsListTitle>Contribuidores</DonorsListTitle>
            <DonorsInfos>
              <img src={user.foto} alt="" />
              <div>
                <p>{user.nome}</p>
                <p>Valor: {user.nome}</p>
              </div>
            </DonorsInfos>
            <Button onClick={() => navigate('/detalhe-campanha/')}>Voltar</Button>
          </DonorsList>
        </DonorsContainer>
      </Section>
      <Footer />
    </>
  )
}

export default CampaignDonors