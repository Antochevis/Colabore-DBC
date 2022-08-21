import { useState, useContext } from 'react'
import { CardContentSm, Card } from './Card'
import { Text, TextSm, colorHoverMenu } from '../../consts'
import { Button } from '../button/Button'
import { useNavigate } from 'react-router-dom'
import { FormStyle } from './CardDetail.styled'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup' 
import { Errors } from '../../pages/register/Register.Styled'
import Modal from '../modal/Modal'
import { CampaignContext } from '../../context/CampaignContext'

const CardDetail = ({campanha, isAuthor, hasUserDonated, finishedByDate, donors}) => {
  const [activeDonate, setActiveDonate] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [disabledButton, setDisabledButton] = useState(true)
  const {handleDonation} = useContext(CampaignContext)
  const hasDonate = campanha.doacoes.length > 0
  const isCampaignFinished = campanha.statusMeta
  const navigate = useNavigate()

  const donationSchema = Yup.object().shape({
    valor: Yup.string().required('Campo obrigatório!')
  })

  const redirectUpdateCampaign = idCampanha => {
    navigate(`/criar-campanha/${idCampanha}`)
  }

  return (
    <Card maxWidth="100%" height="562px">
      <CardContentSm>
        <Text fontSize="1.25rem">Arrecadado</Text>
        <h3>R$ {campanha.arrecadacao}</h3>
        <div>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>Meta</TextSm>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>R$ {campanha.meta}</TextSm>
        </div>
        <div>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>Contribuições</TextSm>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>{campanha.doacoes ? campanha.doacoes.length : 0}</TextSm>
        </div>
        <Button id="botaoContribuicoes"
        width="100%" 
        onClick={() => navigate(`/doadores-campanha/${campanha.idCampanha}`)}>Ver Contribuições</Button>
        {!isAuthor &&
        <Button
        id="botaoContribuir"
        width="100%"
        disabled={isCampaignFinished || finishedByDate}
        title={isCampaignFinished || finishedByDate ? 'Você não pode doar para campanhas finalizadas.' : ''}
        onClick={() => setActiveDonate(!activeDonate ? true : false)}>
        {activeDonate ? 'Cancelar' : !hasUserDonated ? 'Contribuir' : 'Doar Novamente'}
        </Button>}
        {isAuthor &&
        <Button
        id="botaoEditar" 
        disabled={hasDonate || finishedByDate || isCampaignFinished}
        title={hasDonate ? 'Você não pode editar campanhas que possuem contribuições ou estão encerradas.' : ''}
        onClick={() => redirectUpdateCampaign(campanha.idCampanha)}
        width="100%">Editar</Button>}
      </CardContentSm>
      <Formik
            initialValues={{
              valor: ''
            }}
            validationSchema={donationSchema}
            onSubmit={(values, {resetForm}) => {
              handleDonation(values, campanha, setOpenModal)
              resetForm()
            }}
          >
            {({errors, touched}) => (
              <Form>
                <FormStyle style={{display: activeDonate ? 'flex' : 'none'}}>
                  <label htmlFor=""><Text>Digite o valor da contribuição:</Text></label>
                  <div>
                    <Field type="text" name="valor" placeholder="R$" onKeyUp={() => {setDisabledButton(false)}} />
                    <Button
                    id="enviarContribuicao"
                    disabled={disabledButton || errors.valor} 
                    type="button" onClick={() => setOpenModal(true)}
                    width="100px">Enviar</Button>
                  </div>
                  {errors.valor && touched.valor ? (<Errors>{errors.valor}</Errors>) : null}   
                </FormStyle>
                {openModal && <Modal closeModal={setOpenModal}/>}
              </Form>
            )}
      </Formik>
  </Card>
  )
}
export default CardDetail
