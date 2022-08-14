import { useEffect, useState } from 'react'
import { apiColabore } from '../../services/api'
import Loading from '../../components/loading/Loading'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Section } from '../../components/section/Section'

function Campaigns() {
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
        </Section>
        <Footer />
      </>
      
    )
}

export default Campaigns