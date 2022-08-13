import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiColabore } from "../services/api";
import { Toaster, toast } from "react-hot-toast"


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
      setAuth(true)
      navigate('/pessoa')
      toast.success('Logado com sucesso')
    } catch (e) {
      toast.error('Deu erro')
    }
  }

  const handleSignUp = async (values) => {
    try {
      await apiColabore.post('/autenticacao/registrar', values)
      navigate('/')
      toast.success('Cadastrado com sucesso')
    } catch (e) {
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
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp, auth }}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  )

}

export { AuthContext, AuthProvider }