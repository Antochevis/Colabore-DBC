import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { Errors } from "../../pages/register/Register.Styled";
import { Button } from "../button/Button";
import { ContainerAddCampaign, ContainerForm, ListTagsStyle, RegisterCampaign, TestTags } from "./FormComponent.Styled";
import { Card } from "../card/Card"
import { useContext, useEffect, useState } from "react";
import { CampaignContext } from "../../context/CampaignContext";
import Dropzone from 'react-dropzone'
import { apiColabore } from "../../services/api";
import Loading from "../loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import { OnlyNumbers } from "../../utils/Formatting";
import { useParams } from "react-router-dom";
import { maskDate } from "../../utils/Masks";
import CurrencyInput from "../currencyInput/CurrencyInput";
import moment from 'moment'

const CampaignSchema = yup.object().shape({
  titulo: yup.string().required('Campo obrigatório!'),
  descricao: yup.string().required('Campo obrigatório!'),
  meta: yup.string().required('Campo obrigatório!'),
  dataLimite: yup.string().required('Campo obrigatório'),
  encerrarAutomaticamente: yup.string().required('Escolha uma opção válida!')
})

const FormComponent = () => {
  const {redirectCampaign} = useContext(CampaignContext)
  const [image, setImage] = useState();
  const [tags, setTags] = useState([]);
  const { idCampanha } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const [campanha, setCampanha] = useState();

  const [showTag, setShowTag] = useState(false);
  const [searchTag, setSearchTag] = useState([]);
  const [listTagsDB, setListTagsDB] = useState([]);

  const handleShowTags = (nameTag) => {
    if(nameTag) {
      setTags([...tags, nameTag]);
    }

    showTag ? setShowTag(false) : setShowTag(true)

  }


  const listTags = async () => {
    try {
      const { data } = await apiColabore.get('/tag')

      const listTagsFormated = data.map((tag) => tag.nomeTag)

      setListTagsDB(listTagsFormated)

    } catch (error) {
      console.log(error)
    }
  }
  
  
  
  const setup = async () => {
    if (idCampanha) {
      setIsUpdate(true)
      try {
        const { data } = await apiColabore.get(`/campanha/campanhaPeloId?idCampanha=${idCampanha}`)
        setImage(data.fotoCampanha)
        setTags(data.tags)
        setCampanha(data)
      } catch (error) {
        console.log(error)
      }
    }
    await listTags()
  }

  useEffect(() => {
    setup()
  }, [])

  
  function handleKeyDown(e) {
    if(e.key !== 'Enter') return
    const value = e.target.value 
    if(!value.trim()) return
    setTags([...tags, value])
    setSearchTag('')
    e.target.value = ''
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }


  const handleCreateCampaign = async (values, image, tags) => {

    console.log(values)

    const campaignImage = new FormData()
    image && campaignImage.append('multipartFile', image[0])

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

    try {
      const {data: campanhaValues} =   await apiColabore.post('/campanha/cadastrar', newValues)
      const idCampanha = campanhaValues.idCampanha

      try {
        await apiColabore.post(`/campanha/cadastrarFoto?idCampanha=${idCampanha}`, campaignImage, {headers: {'Content-Type': 'multipart/form-data'}})
      } catch (error) {
        toast.error('Não foi possível adicionar a imagem.')
        console.log(error)
      }

      redirectCampaign()
      toast.success('Campanha cadastrada com sucesso')
          
      } catch (error) {
        toast.error('Não foi possível adicionar a imagem.')
        console.log(error)
      }
  }

  const handleUpdateCampaign = async (values, image, tags) => {

    const campaignImage = new FormData()
    image && campaignImage.append('multipartFile', image[0])

    const newDate = new Date (values.dataLimite)

    const isoDate = newDate.toISOString()

    const newValues = {
      titulo: values.titulo,
      meta: values.meta,
      descricao: values.descricao,
      encerrarAutomaticamente: values.encerrarAutomaticamente,
      dataLimite: isoDate,
      tags: tags
    }

    try {
      await apiColabore.put(`/campanha/${idCampanha}`, newValues)

      try {
        await apiColabore.post(`/campanha/cadastrarFoto?idCampanha=${idCampanha}`, campaignImage, {headers: {'Content-Type': 'multipart/form-data'}})
      } catch (error) {
        typeof image !== 'string' && toast.error('Não foi possível adicionar a imagem.')
        console.log(error)
      }
      redirectCampaign()
      toast.success('Campanha editada com sucesso!')
    } catch (error) {
      toast.error('Não foi possível editar a campanha.')
      console.log(error)
    }
  }

  const handleDeleteCampaign = async () => {
    try {
      await apiColabore.delete(`/campanha/delete?id=${idCampanha}`)
      redirectCampaign()
      toast.success('Campanha excluída com sucesso')
    } catch (error) {
      toast.error('Não foi possível excluir a campanha.')
      console.log(error)
    }
  }
  
  const filteredTags = (searchTag.length > 0 && listTagsDB.length > 0) ? listTagsDB.filter(tag => tag.includes(searchTag)) : listTagsDB

  if((isUpdate && campanha) || !isUpdate) {
  return (
    <ContainerForm>
      <Card padding="2rem" >
        <ContainerAddCampaign>
          <h2>Cadastrar nova campanha</h2>
          <Formik
            initialValues={{
              titulo: isUpdate ? campanha.titulo : '',
              meta: isUpdate ? campanha.meta : '',
              descricao: isUpdate ? campanha.descricao : '',
              encerrarAutomaticamente: isUpdate ? campanha.encerrarAutomaticamente : '',
              dataLimite: isUpdate ? moment(campanha.dataLimite, 'YYYY-MM-DD').format('YYYY-MM-DD') : '',
              foto: '',
            }}
            validationSchema={CampaignSchema}
            onSubmit={(values) => {
              !isUpdate ? handleCreateCampaign(values, image, tags) : handleUpdateCampaign(values, image, tags)
            }}
          >
            {({errors, touched, props}) => (
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
                      <Field
                      name="meta"
                      render= {({field}) => (
                        <CurrencyInput
                          {...field}
                          id="meta"
                          placeholder="R$ 0,00"
                          />
                      )}
                      />
                      
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
                      <Field id='dataLimite' type='date' name='dataLimite' ></Field>
                      {errors.dataLimite && touched.dataLimite ? (<Errors>{errors.dataLimite}</Errors>) : null}                      
                    </div>
                  </div>
                  <div>
                    <label htmlFor="tags">Digite as tags que mais se encaixam no projeto*</label>
                    <ListTagsStyle>
                      <input id='tags' name='tags' placeholder='Digite as tags da campanha' value={searchTag} onChange={(e) => setSearchTag(e.target.value)} onClick={() => handleShowTags()} onKeyDown={handleKeyDown} autoComplete="off"/>
                      <div className={showTag ? 'active' : ''}>
                        <div>
                        {(showTag || searchTag.length > 0) && filteredTags && filteredTags.map((tag, index) => (
                          <div key={index}>
                            <span onClick={() => handleShowTags(tag)}>{tag}</span>
                          </div>
                        ))}
                        </div>
                      </div>
                      <div>
                        {tags.map((tag, index) => (
                          <div key={index}>
                            <span>{tag} <span onClick={() => removeTag(index)}>&times;</span></span>
                          </div>
                        ))}
                      </div>
                    </ListTagsStyle>
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
                            { image ? <img src={(isUpdate && typeof image  === 'string') ? image : URL.createObjectURL(image[0])} alt="" /> : <p>Arraste arquivos até aqui, ou clique para buscar.</p>}
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>
                  <Button
                  type='submit'
                  width="100%"
                  disabled={errors.titulo || errors.meta || errors.encerrarAutomaticamente || errors.descricao || tags.length === 0}>{!isUpdate ? 'Cadastrar campanha' : 'Atualizar campanha'}</Button>
                  {!isUpdate ? <></> : 
                  <Button type='submit' width='100%' onClick={handleDeleteCampaign}>Excluir</Button>
                  }
                </RegisterCampaign>
              </Form>
            )}
          </Formik>
          <div>
            <Button onClick={() => window.history.go(-1)}>Voltar</Button>
          </div>
        </ContainerAddCampaign>
      </Card>
    </ContainerForm>
  )
  }
}

export default FormComponent