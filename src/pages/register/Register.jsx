import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Field, Form, Formik } from 'formik';
import * as yup from "yup";
import { Logo } from "../../components/logo/Logo";
import { BackgroundRegister, RegisterButtonFormStyle, RegisterContainer, RegisterFormStyle, RegisterButtonVoltar, LogoAndTextRegister, RegisterTitle, Errors, RequiredFields } from './Register.Styled';
import { useNavigate } from 'react-router-dom';
import { Signup } from "../login/Login.Styled";
import PasswordStrengthMeter from '../../components/passwordStrengthMeter/PasswordStrengthMeter';



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
  const [image, setImage] = useState();
  const [userInfo, setuserInfo] = useState({
    password: '',
  });
  const [isError, setError] = useState(null);

  const SignupSchema = yup.object().shape({
    nome: yup.string()
      .min(2, 'Mínimo de 2 caractéres')
      .max(50, 'Máximo de 50 caractéres')
      .required('Campo obrigatório!'),
    email: yup.string()
      .email('Insira um email válido')
      .matches(/^[a-z0-9.]+@dbccompany.com.br/, 'O email deve conter: @dbccompany.com.br')
      .required('Campo obrigatório!'),
    senha: yup.string()
      .min(8, 'Mínimo de 8 caractéres')
      .max(16, 'Máximo de 16 caractéres')
      .required('Campo obrigatório!'),
    confirmarSenha: yup.string()
      .min(8, 'Mínimo de 8 caractéres')
      .max(16, 'Máximo de 16 caractéres')
      .oneOf([yup.ref('senha'), null], 'As senhas precisam ser iguais.')
      .required('Campo obrigatório!')
  })
  
  const handleChangePassword = (e) => {
    let password  = e.target.value;
    setuserInfo({
      ...userInfo,
      password:e.target.value
    });
    setError(null);
    let capsCount, smallCount, numberCount, symbolCount
    if (password.length < 4) {
      setError("Password must be minimum 4 characters include one UPPERCASE, lowercase, number and special character: @$! % * ? &");
      return;
    }
    else {
      capsCount = (password.match(/[A-Z]/g) || []).length
      smallCount = (password.match(/[a-z]/g) || []).length
      numberCount = (password.match(/[0-9]/g) || []).length
      symbolCount = (password.match(/\W/g) || []).length
      if (capsCount < 1) {
        setError("Must contain one UPPERCASE letter");
        return;
      }
      else if (smallCount < 1) {
        setError("Must contain one lowercase letter");
        return;
      }
      else if (numberCount < 1) {
        setError("Must contain one number");
        return;
      }
      else if (symbolCount < 1) {
        setError("Must contain one special character: @$! % * ? &");
        return;
      }
    }
  }
  
  const [isStrength, setStrength] = useState(null);
  const dataHandler = async (childData) => {
    setStrength(childData);
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
                <Field type='password' name='senha' placeholder='Digite sua senha' data-component='password-strength' onKeyUp={handleChangePassword}/>
                {errors.senha && touched.senha ? (<Errors>{errors.senha}</Errors>) : null}
              </div>
              <PasswordStrengthMeter password={userInfo.password} actions={dataHandler}/>
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