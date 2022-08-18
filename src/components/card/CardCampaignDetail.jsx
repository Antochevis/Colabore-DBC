import { Card } from './Card'
import capa from '../../imgs/capa.png'
import { CardContent } from './CardCampaignDetail.styled'
import { TextSm, Text, Subtitle, colorHoverMenu, colorTittlePage } from '../../consts'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

const CardCampaignDetail = ({campanha}) => {

  return (
    <Card maxWidth="100%" minHeight="100%">
      <CardContent>
        <img src={campanha.fotoCampanha} />
        <div>
          <div>
            <Subtitle color={colorTittlePage}>{campanha.titulo}</Subtitle>
            <TextSm color={colorHoverMenu} fontWeight="400">{moment(campanha.ultimaAlteracao).startOf('hour').fromNow()}</TextSm>
          </div>
        </div>
        <div>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Por:</TextSm>  Vitor Scheffer
            </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Categoria:</TextSm>  {campanha.tags.map(tag => tag.nomeTag)}
            </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Colabore até:</TextSm>  {moment(campanha.dataLimite).format('LL')}
            </TextSm>
        </div>
        <div>
          <p>
            {campanha.descricao} 
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardCampaignDetail