import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Errors } from "../../pages/register/Register.Styled";
import { Button } from "../button/Button";
import { ContainerAddCampaign, RegisterCampaign } from "./FormComponent.Styled";

const SignupSchema = yup.object().shape({
  titulo: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  meta: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  /*concluirAutomaticamenteACampanha: yup.string()
    .required('Campo obrigatório!'),*/
  descricao: yup.string()
  .min(2, 'Mínimo de 2 caractéres')
  .max(200, 'Máximo de 200 caractéres')
  .required('Campo obrigatório!'),
  tag: yup.string()
  .required('Campo obrigatório!'),
  /*foto: yup.string()
  .required('Campo obrigatório!'),
  */
  concluirAutomaticamenteACampanha: yup.string()
  .required('Escolha uma opção válida!')
})

const FormComponent = () => {
  const navigate = useNavigate()

  return (
    <ContainerAddCampaign>
      <h2>Cadastrar nova campanha</h2>
      <Formik
            initialValues={{
              titulo:'',
              meta: '',
              descricao: '',
              tag: '',
              foto: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              ;
            }}
          >
          {({errors, touched}) => (
            <Form>
              <RegisterCampaign>
                <div>
                  <label htmlFor="titulo">Título da campanha*</label>
                  <Field name='titulo' placeholder='Digite o título da campanha' />
                  {errors.titulo && touched.titulo ? (<Errors>{errors.titulo}</Errors>) : null}
                </div>
                <div>
                  <label htmlFor="meta">Quantidade a ser arrecadada*</label>
                  <Field type='meta' name='meta' placeholder='Digite a quantidade a ser arrecada'/>
                  {errors.meta && touched.meta ? (<Errors>{errors.meta}</Errors>) : null}
                </div>
                <div>
                  <label htmlFor="concluirAutomaticamenteACampanha">Ao atingir a meta, deseja concluir automaticamente a campanha?*</label>
                  <Field component='select' name='concluirAutomaticamenteACampanha' >
                    <option value={null}>Escolha uma opção</option>
                    <option value='sim'>Sim</option>
                    <option value='nao'>Não</option>  
                  </Field>
                  {errors.concluirAutomaticamenteACampanha && touched.concluirAutomaticamenteACampanha ? (<Errors>{errors.concluirAutomaticamenteACampanha}</Errors>) : null}
                </div>
                <div>
                  <label htmlFor="descricao">Descrição</label>
                  <Field type='descricao' name='descricao' placeholder='Digite a descrição da campanha'/>
                  {errors.descricao && touched.descricao ? (<Errors>{errors.descricao}</Errors>) : null}
                </div>
                <div>
                  <label htmlFor="tag">Digite as tags que mais se encaixam no projeto?*</label>
                  <Field type='tag' name='tag' placeholder='Digite as tags da campanha'/>
                  {errors.tag && touched.tag ? (<Errors>{errors.tag}</Errors>) : null}
                </div>
                <div>
                  <label htmlFor="foto">Foto da campanha*</label>
                  <Field type='foto' name='foto' placeholder='text'/>
                  {errors.foto && touched.foto ? (<Errors>{errors.foto}</Errors>) : null}
                </div>
                <Button type="submit" width="883px">Cadastrar campanha</Button>
              </RegisterCampaign>
            </Form>
          )}
          </Formik>
          <div>
            <Button onClick={() => navigate('/campanhas/idUsuario')}>Volar</Button>
          </div>
        </ContainerAddCampaign>
  )
}

export default FormComponent