import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { Button } from "../button/Button";

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
  foto: yup.string()
  .required('Campo obrigatório!'),
  concluirAutomaticamenteACampanha: yup.string()
  .required('Escolha uma opção válida!')
})

const FormComponent = () => {  

  return (
    <>
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
              <div>
                <label htmlFor="titulo">Título da campanha*</label>
                <Field name='titulo' placeholder='Digite o título da campanha' />
                {errors.titulo && touched.titulo ? (<errors>{errors.titulo}</errors>) : null}
              </div>
              <div>
                <label htmlFor="meta">Quantidade a ser arrecadada*</label>
                <Field type='meta' name='meta' placeholder='text'/>
                {errors.meta && touched.meta ? (<errors>{errors.meta}</errors>) : null}
              </div>
              <div>
                <label htmlFor="concluirAutomaticamenteACampanha">Ao atingir a meta, deseja concluir automaticamente a campanha?*</label>
                <Field component='select' name='concluirAutomaticamenteACampanha' >
                  <option value={null}>Escolha uma opção</option>
                  <option value='sim'>Sim</option>
                  <option value='nao'>Não</option>  
                </Field>
                {errors.concluirAutomaticamenteACampanha && touched.concluirAutomaticamenteACampanha ? (<errors>{errors.concluirAutomaticamenteACampanha}</errors>) : null}
              </div>
              <div>
                <label htmlFor="descricao">Descrição</label>
                <Field type='descricao' name='descricao' placeholder='Digite a descrição da campanha'/>
                {errors.descricao && touched.descricao ? (<errors>{errors.descricao}</errors>) : null}
              </div>
              <div>
                <label htmlFor="tag">Escolha a tag que mais se encaixa no projeto?*</label>
                <Field component='select' name='tag' >
                  <option value={null}>Escolha uma opção</option>
                  <option value='sim'>Sim</option>
                  <option value='nao'>Não</option>  
                </Field>
                {errors.tag && touched.tag ? (<errors>{errors.tag}</errors>) : null}
              </div>
              <div>
                <label htmlFor="concluirAutomaticamenteACampanha">Quantidade a ser arrecadada*</label>
                <Field type='concluirAutomaticamenteACampanha' name='concluirAutomaticamenteACampanha' placeholder='text'/>
                {errors.concluirAutomaticamenteACampanha && touched.concluirAutomaticamenteACampanha ? (<errors>{errors.concluirAutomaticamenteACampanha}</errors>) : null}
              </div>
              <Button type="submit">Cadastrar campanha</Button>
          </Form>
        )}
        </Formik>
        <div>
          <Button >Não possuo cadastro</Button>
        </div>
        </>
  )
}

export default FormComponent