import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { BackgroundPage, ButtonFormStyle, Errors, FormStyle, LoginContainer, LogoAndText, Signup } from "./Login.Styled";
import { Logo } from "../../components/logo/Logo";


const SignupSchema = yup.object().shape({
  email: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  senha: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!')
})

const Login = () => {
  const {handleLogin} = useContext(AuthContext)
  const navigate = useNavigate()

  function GoToRegister(){
    navigate('/criar-usuario')
  }

  return (
    <BackgroundPage>
      <LoginContainer>
        <LogoAndText>
          <Logo />
          <h2>Colabore</h2>
        </LogoAndText>
        <Formik
          initialValues={{
            email:'',
            senha:''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            handleLogin(values);
          }}
        >
        {({errors, touched}) => (
          <Form>
            <FormStyle>
              <div>
                <label htmlFor="email">*E-mail: </label>
                <Field name='email' placeholder='Digite seu e-mail' />
                {errors.email && touched.email ? (<Errors>{errors.email}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="senha">*Senha: </label>
                <Field type='password' name='senha' placeholder='Password'/>
                {errors.senha && touched.senha ? (<Errors>{errors.senha}</Errors>) : null}
              </div>
              <div>
                <p>*Campos Obrigatórios</p>
              </div>
              <ButtonFormStyle type="submit">Entrar</ButtonFormStyle>
            </FormStyle>
          </Form>
        )}
        </Formik>
        <div>
          <Signup onClick={GoToRegister}>Não possuo cadastro</Signup>
        </div>
      </LoginContainer>
    </BackgroundPage>
  )



}


export default Login