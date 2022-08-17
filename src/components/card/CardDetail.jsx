import { CardContentSm, Card } from './Card'
import { Text, TextSm, colorHoverMenu } from '../../consts'
import { Button } from '../button/Button'

const CardDetail = () => {
  return (
    <Card maxWidth="100%" height="400px">
      <CardContentSm>
        <Text fontSize="1.25rem">Arrecadado</Text>
        <h3>R$ 1500</h3>
        <div>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>Meta</TextSm>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>R$ 1500</TextSm>
        </div>
        <div>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>Apoiadores</TextSm>
          <TextSm fontSize="1.25rem" color={colorHoverMenu}>15</TextSm>
        </div>
        <Button width="100%">Ver Contribuidores</Button>
        <Button width="100%">Contribuir</Button>
      </CardContentSm>
  </Card>
  )
}
export default CardDetail