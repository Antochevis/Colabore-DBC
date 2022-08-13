import { useEffect, useState } from 'react'
import { apiColabore } from '../../services/api'
import Loading from '../../components/Loading/Loading'

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
      <h1>Seja bem vindo {user.nome}</h1>
    )
}

export default Campaigns