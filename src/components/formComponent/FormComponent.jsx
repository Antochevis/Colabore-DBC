import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { Errors } from "../../pages/register/Register.Styled";
import { Button } from "../button/Button";
import { ContainerAddCampaign, ContainerForm, RegisterCampaign } from "./FormComponent.Styled";
import { Card } from "../card/Card"
import { useContext, useState } from "react";
import { CampaignContext } from "../../context/CampaignContext";
import Dropzone from 'react-dropzone'
import { apiColabore } from "../../services/api";
import Loading from "../loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import { OnlyNumbers } from "../../utils/Formatting";

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
  const {redirectCampaign} = useContext(CampaignContext)
  const [image, setImage] = useState();

  const addCampaign = async (values, image) => {

    const campaignImage = new FormData()
    image && campaignImage.append('multipartFile', image[0])

    try {
      await apiColabore.post('/campanha/cadastrar', values)

      if(image) {
        try {
          await apiColabore.post('/campanha/cadastrarFoto', campaignImage, {headers: {'Content-Type': 'multipart/form-data'}})
        } catch (error) {
          toast.error('Não foi possível adicionar a imagem.')
          console.log(error)
        }

        redirectCampaign()

        toast('Campanha cadastrada com sucesso')
      }
    } catch (e) {
      console.log(e)
      toast.error('Não foi possível cadastrar a campanha.')
    }
  }


  return (
    <ContainerForm>
      <Card padding="2rem">
        <ContainerAddCampaign>
          <h2>Cadastrar nova campanha</h2>
          <Formik
            initialValues={{
              titulo:'',
              meta: '',
              descricao: '',
              encerrarAutomaticamente: true,
              dataLimite: '',
              foto: '',
              tags: '' 
            }}
            validationSchema={SignupSchema}

            onSubmit={(values, {resetForm}) => {
              const newValues = {
                titulo: values.titulo,
                meta: OnlyNumbers(values.meta),
                descricao: values.descricao,
                encerrarAutomaticamente: values.encerrarAutomaticamente,
                dataLimite: values.dataLimite,
                tags: [ {
                  nomeTag: values.tags
                } ]
              }
              addCampaign(newValues, image)
              resetForm()
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
                    <label htmlFor="dataLimite">Digite as tags que mais se encaixam no projeto?*</label>
                    <Field type='date' name='dataLimite' placeholder='Selecione a data limite para o encerramento da campanha'/>
                    {errors.dataLimite && touched.dataLimite ? (<Errors>{errors.dataLimite}</Errors>) : null}                      
                  </div>
                  <div>
                    <label htmlFor="tag">Digite as tags que mais se encaixam no projeto?*</label>
                    <Field type='tag' name='tag' placeholder='Digite as tags da campanha'/>
                    {errors.tag && touched.tag ? (<Errors>{errors.tag}</Errors>) : null}
                  </div>
                  <div>
                    <label htmlFor="descricao">Descrição</label>
                    <Field type='descricao' name='descricao' placeholder='Digite a descrição da campanha'/>
                    {errors.descricao && touched.descricao ? (<Errors>{errors.descricao}</Errors>) : null}
                  </div>
                  <div>
                    <label htmlFor="foto">Foto</label>
                    <Dropzone onDrop={acceptedFiles => setImage(acceptedFiles)}>
                      {({getRootProps, getInputProps}) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            { image ? <img src={URL.createObjectURL(image[0])} alt="" /> : <p>Arraste arquivos até aqui, ou clique para buscar.</p>}
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>
                  <Button type="submit" width="883px">Cadastrar campanha</Button>
                </RegisterCampaign>
              </Form>
            )}
          </Formik>
          <div>
            <Button onClick={redirectCampaign}>Voltar</Button>
          </div>
        </ContainerAddCampaign>
      </Card>
    </ContainerForm>
  )
}

export default FormComponent