import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Field, Form, Formik } from 'formik';
import * as yup from "yup";
import { Logo } from "../../components/logo/Logo";
import { BackgroundRegister, RegisterButtonFormStyle, RegisterContainer, RegisterFormStyle, RegisterButtonVoltar, LogoAndTextRegister, RegisterTitle, Errors, RequiredFields } from './Register.Styled';
import { useNavigate } from 'react-router-dom';
import { Signup } from "../login/Login.Styled";

const SignupSchema = yup.object().shape({
  nome: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  email: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  senha: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  confirmarSenha: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!')
})

function Register() {
  //const navigate = useNavigate();
  
  /*
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('/')
    }
  }, [])
  */
 
  const { handleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [image, setImage] = useState()

  return (
    <BackgroundRegister>
      <RegisterContainer>
        <LogoAndTextRegister>
          <Logo />
          <h2>Colabore</h2>
          <RegisterTitle>Cadastrar um novo  Usuário</RegisterTitle>
        </LogoAndTextRegister>
        <Formik
          initialValues={{
            nome:'',
            foto:'',
            email: '',
            senha: '',
            confirmarSenha: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, {resetForm}) => {
            const newValues = {
              nome: values.nome,
              email: values.email,
              senha: values.senha
              }
            handleSignUp(newValues, image)
            resetForm()
          }}
        >
        {({errors, touched}) => (
          <Form>
            <RegisterFormStyle>
              <div>
                <label htmlFor="nome">Nome completo*</label>
                <Field name='nome' placeholder='Digite seu nome completo'/>
                {errors.nome && touched.nome ? (<Errors>{errors.nome}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="foto">Foto</label>
                <Field name='foto' type="file" placeholder='Foto' onChange={(e)=>{setImage(e.target.files[0])}}/>
                {errors.foto && touched.foto ? (<Errors>{errors.foto}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="email">E-mail*</label>
                <Field name='email' placeholder='Digite seu e-mail'/>
                {errors.email && touched.email ? (<Errors>{errors.email}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="senha">Senha*</label>
                <Field type='password' name='senha' placeholder='Digite sua senha'/>
                {errors.senha && touched.senha ? (<Errors>{errors.senha}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="confirmarSenha">Confirmar senha*</label>
                <Field type='password' name='confirmarSenha' placeholder='Confirme sua senha'/>
                {errors.confirmarSenha && touched.confirmarSenha ? (<Errors>{errors.confirmarSenha}</Errors>) : null}
              </div>
              <RegisterButtonFormStyle disabled={errors.nome || errors.email || errors.senha || errors.confirmarSenha} type='submit'>Cadastrar</RegisterButtonFormStyle>
              <Signup onClick={() => navigate('/')}>Já possuo cadastro</Signup>
            </RegisterFormStyle>
          </Form>
        )}
        </Formik>
      </RegisterContainer>
    </BackgroundRegister>
  )
}

export default Register