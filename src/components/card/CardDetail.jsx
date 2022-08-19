import { CardContentSm, Card } from './Card'
import { Text, TextSm, colorHoverMenu } from '../../consts'
import { Button } from '../button/Button'
import { useNavigate } from 'react-router-dom'

const CardDetail = ({campanha}) => {
  const navigate = useNavigate()

  return (
    <Card maxWidth="100%" height="400px">
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
        <Button width="100%">Contribuir</Button>
      </CardContentSm>
  </Card>
  )
}
export default CardDetail