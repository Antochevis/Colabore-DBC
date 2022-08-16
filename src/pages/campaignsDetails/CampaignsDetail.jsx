import { useEffect, useState } from "react"
import { Card } from "../../components/card/Card"
import CardCampaign from "../../components/card/CardCampaign"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Loading from "../../components/loading/Loading"
import { Section } from "../../components/section/Section"
import { apiColabore } from "../../services/api"


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
          <Card maxWidth= '698px' height= '688px'>
            
          </Card>
        </Section>
      <Footer />
    </>
  )
}

export default CampaignsDetail