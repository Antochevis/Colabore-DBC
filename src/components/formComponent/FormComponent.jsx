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

const CampaignSchema = yup.object().shape({
  titulo: yup.string().required('Campo obrigatório!'),
  meta: yup.number().required('Campo obrigatório!'),
  descricao: yup.string().required('Campo obrigatório!'),
  tags: yup.string().required('Campo obrigatório!'),
  encerrarAutomaticamente: yup.string().required('Escolha uma opção válida!'),
  dataLimite: yup.date().required('Escolha uma data válida!')
})

const FormComponent = () => {
  const {redirectCampaign} = useContext(CampaignContext)
  const [image, setImage] = useState();
  const [tags, setTags] = useState([])

  function handleKeyDown(e) {
    if(e.key !== 'Enter') return
    const value = e.target.value 
    if(!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }


  const addCampaign = async (values, image, tags) => {

    const campaignImage = new FormData()
    image && campaignImage.append('multipartFile', image[0])

    try {
      const newDate = new Date (values.dataLimite)

      const isoDate = newDate.toISOString()

      const newValues = {
        titulo: values.titulo,
        meta: OnlyNumbers(values.meta),
        descricao: values.descricao,
        encerrarAutomaticamente: values.encerrarAutomaticamente,
        dataLimite: isoDate,
        tags: tags
      }

      console.log(newValues)
        
      // try {
      //   const {data: campanhaValues} =   await apiColabore.post('/campanha/cadastrar', newValues)
      //   const idCampanha = campanhaValues.idCampanha

      //   try {
      //     await apiColabore.post(`/campanha/cadastrarFoto?idCampanha=${idCampanha}`, campaignImage, {headers: {'Content-Type': 'multipart/form-data'}})
      //   } catch (error) {
      //     toast.error('Não foi possível adicionar a imagem.')
      //     console.log(error)
      //   }
          
      //   } catch (error) {
      //     toast.error('Não foi possível adicionar a imagem.')
      //     console.log(error)
      //   }
        

      redirectCampaign()
      toast('Campanha cadastrada com sucesso')

    } catch (e) {
      console.log(e)
      toast.error('Não foi possível cadastrar a campanha.')
    }
    
  }


  return (
    <ContainerForm>
      <Card padding="2rem" >
        <ContainerAddCampaign>
          <h2>Cadastrar nova campanha</h2>
          <Formik
            initialValues={{
              titulo:'',
              meta: '',
              descricao: '',
              encerrarAutomaticamente: '',
              dataLimite: '',
              foto: '',
              tags: '' 
            }}
            validationSchema={CampaignSchema}
            onSubmit={(values) => {
              addCampaign(values, image, tags)
            }}
          >
            {({errors, touched}) => (
              <Form>
                <RegisterCampaign>
                  <div>
                    <div>
                      <label htmlFor="titulo">Título da campanha*</label>
                      <Field id='titulo' name='titulo' placeholder='Digite o título da campanha' />
                      {errors.titulo && touched.titulo ? (<Errors>{errors.titulo}</Errors>) : null}
                    </div>
                    <div>
                      <label htmlFor="meta">Quantidade a ser arrecadada*</label>
                      <Field id='meta' name='meta' placeholder='Digite a quantidade a ser arrecada'/>
                      {errors.meta && touched.meta ? (<Errors>{errors.meta}</Errors>) : null}
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="encerrarAutomaticamente">Ao atingir a meta, deseja concluir automaticamente a campanha?*</label>
                      <Field id='select' component='select' name='encerrarAutomaticamente' >
                        <option value={null}>Escolha uma opção</option>
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>  
                      </Field>
                      {errors.encerrarAutomaticamente && touched.encerrarAutomaticamente ? (<Errors>{errors.encerrarAutomaticamente}</Errors>) : null}
                    </div>
                    <div>
                      <label htmlFor="dataLimite">Selecione a data limite do projeto*</label>
                      <Field type='date' id='dataLimite' name='dataLimite' placeholder='Selecione a data limite para o encerramento da campanha'/>
                      {errors.dataLimite && touched.dataLimite ? (<Errors>{errors.dataLimite}</Errors>) : null}                      
                    </div>
                  </div>
                  <div>
                    <label htmlFor="tags">Digite as tags que mais se encaixam no projeto*</label>
                    <div className="tags-input-container">
                      {tags.map((tag, index) => (
                        <div className="tag-item" key={index}>
                          <span className="text">{tag}</span>
                          <span className="text">&times;</span>
                        </div>
                      ))}
                      <Field id='tags' name='tags' placeholder='Digite as tags da campanha' onKeyDown={handleKeyDown}/>
                    </div>
                    {errors.tags && touched.tags ? (<Errors>{errors.tags}</Errors>) : null}
                  </div>
                  <div>
                    <label htmlFor="descricao">Descrição</label>
                    <Field as='textarea' id='descricao' name='descricao' placeholder='Digite a descrição da campanha'/>
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
                  <Button type='submit' width="100%" disabled={errors.titulo || errors.meta || errors.encerrarAutomaticamente || errors.dataLimite || errors.tags || errors.descricao}>Cadastrar campanha</Button>
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