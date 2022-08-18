import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiColabore } from "../services/api";
import { Toaster, toast } from "react-hot-toast"
import Loading from "../components/loading/Loading";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      apiColabore.defaults.headers.common['Authorization'] = token
      setAuth(true)
    }
    setLoading(false)
  }, []);

  const handleLogin = async (user) => {
    try {
      const { data } = await apiColabore.post('/autenticacao/login', user);
      localStorage.setItem('token', data)
      apiColabore.defaults.headers.common['Authorization'] = data
      try{
        const { data } = await apiColabore.get('/usuario/dadosUsuario')
        setAuth(true)
        navigate(`/campanhas/${data.idUsuario}`)
        toast.success('Logado com sucesso')
      } catch(e) {
        console.log(e)
        toast.error('Deu erro')
      }
    } catch (e) {
      console.log(e)
      toast.error('Deu erro')
    }
  }

  const handleSignUp = async (values, image) => {
    setLoading(true)
    const userImage = new FormData()
    userImage.append('multipartFile', image[0])
    try {
      const {data} =  await apiColabore.post('/autenticacao/cadastrar', values)
      localStorage.setItem('token', data)
      apiColabore.defaults.headers.common['Authorization'] = data
      
      try {
        await apiColabore.post('/autenticacao/cadastrarFoto', userImage, {headers: {'Content-Type': 'multipart/form-data'}})
        const { data } = await apiColabore.get('/usuario/dadosUsuario')
        setLoading(false)
        setAuth(true)
        navigate(`/campanhas/${data.idUsuario}`)
        toast.success('Seja bem vindo!')
      } catch (error) {
        toast.error('Não foi possível adicionar a imagem.')
        console.log(error)
      }
      toast.success('Cadastrado realizado com sucesso!')
    } catch (e) {
      console.log(e)
      toast.error('Deu erro')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    apiColabore.defaults.headers.common['Authorization'] = undefined
    setAuth(false)
    navigate('/')
    toast.success('Tchau!')
  }

  if (loading) {
      return (<Loading />)
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp, auth }}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  )

}

export { AuthContext, AuthProvider }