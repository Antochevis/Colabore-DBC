import { Card } from './Card'
import capa from '../../imgs/capa.png'
import { CardContent } from './CardCampaign.styled'
import { TextSm, Text, Subtitle, colorHoverMenu, colorTittlePage } from '../../consts'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/pt-br'

const CardCampaign = ({campanha}) => {
  const navigate = useNavigate();

  return (
    <Card maxWidth="100%" height="350px">
      <CardContent>
        <img src={campanha.fotoCampanha} />
        <div>
          <div>
            <Subtitle color={colorTittlePage}>{campanha.titulo}</Subtitle>
            <TextSm color={colorHoverMenu} fontWeight="400">{moment(campanha.ultimaAlteracao).startOf('hour').fromNow()}</TextSm>
          </div>
          <button onClick={() => navigate(`/detalhe-campanha/${campanha.idCampanha}`)}>Ver detalhes</button>
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
        <footer>
          <div>
            <Text>Arrecadado</Text>
            <Text>R$ {campanha.arrecadacao}</Text>
          </div>
          <div></div>
          <div>
            <Text>Meta</Text>
            <Text>R$ {campanha.meta}</Text>
          </div>
        </footer>
      </CardContent>
    </Card>
  )
}

export default CardCampaign