import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { BackgroundPage, Errors, FormStyle, LoginContainer, LogoAndText, Signup } from "./Login.Styled";
import { Logo } from "../../components/logo/Logo";
import { ImgLogin } from "../../components/imgLogin/ImgLogin";
import { Button } from "../../components/button/Button";


const SignupSchema = yup.object().shape({
  email: yup.string()
    .matches(/@dbccompany.com.br/, 'O email deve conter: @dbccompany.com.br')
    .required('Campo obrigatório!'),
  senha: yup.string()
    .min(8, 'Mínimo de 8 caractéres')
    .max(16, 'Máximo de 16 caractéres')
    .required('Campo obrigatório!')
})

const Login = () => {
  const {handleLogin} = useContext(AuthContext)
  const navigate = useNavigate()

  function GoToRegister(){
    navigate('/criar-usuario')
  }

  return (
    <LoginContainer>
      <BackgroundPage>
        <ImgLogin />
      </BackgroundPage>
      <div>
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
                <label htmlFor="email">E-mail*</label>
                <Field id='email' name='email' placeholder='Digite seu e-mail' />
                {errors.email && touched.email ? (<Errors>{errors.email}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="senha">Senha*</label>
                <Field id='senha' type='password' name='senha' placeholder='Password'/>
                {errors.senha && touched.senha ? (<Errors>{errors.senha}</Errors>) : null}
              </div>
              <Button id="entrar" width="35rem" type="submit">Entrar</Button>
            </FormStyle>
          </Form>
        )}
        </Formik>
          <Signup id="signup" onClick={GoToRegister}>Não possuo cadastro</Signup>
      </div>
    </LoginContainer>
  )
}


export default Login