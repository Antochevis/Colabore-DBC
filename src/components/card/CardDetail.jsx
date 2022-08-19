import { CardContentSm, Card } from './Card'
import { Text, TextSm, colorHoverMenu } from '../../consts'
import { Button } from '../button/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FormStyle } from './CardDetail.styled'
import { Formik, Field, Form } from 'formik'

const CardDetail = ({campanha}) => {
  const [activeDonate, setActiveDonate] = useState(false)
  const navigate = useNavigate()

  return (
    <Card maxWidth="100%" height="100%">
      <CardContentSm>
        <Text fontSize="1.25rem">Arrecadado</Text>
        <h3>R$ {campanha.arrecadacao}</h3>
        <div>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>Meta</TextSm>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>R$ {campanha.meta}</TextSm>
        </div>
        <div>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>Apoiadores</TextSm>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>{campanha.doacoes ? campanha.doacoes.length : 0}</TextSm>
        </div>
        <Button width="100%" onClick={() => navigate(`/doadores-campanha/${campanha.idCampanha}`)} >Ver Contribuidores</Button>
        <Button width="100%" onClick={() => setActiveDonate(!activeDonate ? true : false)}>{activeDonate ? 'Cancelar' : 'Contribuir'}</Button>
      </CardContentSm>
      <Formik
            initialValues={{
              valor: '' 
            }}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({errors, touched}) => (
              <Form>
                <FormStyle style={{display: activeDonate ? 'flex' : 'none'}}>
                  <label htmlFor=""><Text>Digite o valor da contribuição:</Text></label>
                  <div>
                    <Field type="text" name="valor" placeholder="R$" />
                    <Button type="submit" width="100px">Enviar</Button>
                  </div>
                </FormStyle>
              </Form>
            )}
      </Formik>
  </Card>
  )
}
export default CardDetail
