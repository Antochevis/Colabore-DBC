import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Field, Form, Formik } from 'formik';
import * as yup from "yup";
import { Logo } from "../../components/logo/Logo";
import { BackgroundRegister, RegisterButtonFormStyle, RegisterContainer, RegisterFormStyle, RegisterButtonVoltar, LogoAndTextRegister, RegisterTitle, Errors, RequiredFields } from './Register.Styled';
import { useNavigate } from 'react-router-dom';

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

  function BackLogin() {
    navigate('/')
  }

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
            autenticacaoDto: {
              email:'',
              senha:''
            }
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            handleSignUp(values);
          }}
        >
        {({errors, touched}) => (
          <Form>
            <RegisterFormStyle>
              <div>
                <label htmlFor="nome">*Nome completo: </label>
                <Field name='nome' placeholder='Digite seu nome completo'/>
                {errors.nome && touched.nome ? (<Errors>{errors.nome}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="foto">Foto: </label>
                <Field name='foto' placeholder='Foto'/>
                {errors.foto && touched.foto ? (<Errors>{errors.foto}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="email">*E-mail: </label>
                <Field name='email' placeholder='Username'/>
                {errors.email && touched.email ? (<Errors>{errors.email}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="senha">*Senha: </label>
                <Field type='password' name='senha' placeholder='Password'/>
                {errors.senha && touched.senha ? (<Errors>{errors.senha}</Errors>) : null}
              </div>
              <div>
                <RequiredFields>*Campos obrigatórios</RequiredFields>
              </div>
              <RegisterButtonFormStyle type='submit'>Register</RegisterButtonFormStyle>
              <RegisterButtonVoltar onClick={BackLogin} type='submit'>Back</RegisterButtonVoltar>
            </RegisterFormStyle>
          </Form>
        )}
        </Formik>
      </RegisterContainer>
    </BackgroundRegister>
  )
}

export default Register