import { Card } from './Card'
import capa from '../../imgs/capa.png'
import { CardContent } from './CardCampaign.styled'
import { TextSm, Text, Subtitle, colorHoverMenu, colorTittlePage } from '../../consts'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/pt-br'

const CardCampaign = ({img, campaignTitle, criador, tag, dataFinal, arrecadado, meta, dataModificacao, statusMeta}) => {

  const navigate = useNavigate();

  return (
    <Card maxWidth="100%" height="350px">
      <CardContent>
        <img src={img} />
        <div>
          <div>
            <Subtitle color={colorTittlePage}>{campaignTitle}</Subtitle>
            <TextSm color={colorHoverMenu} fontWeight="400">{moment(dataModificacao).startOf('hour').fromNow()}</TextSm>
          </div>
          <button onClick={() => navigate('/detalhe-campanha')}>Ver detalhes</button>
        </div>
        <div>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Por:</TextSm>  {criador}
            </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Categoria:</TextSm>  {tag}
            </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Colabore até:</TextSm>  {moment(dataFinal).format('LL')}
            </TextSm>
        </div>
        <footer>
          <div>
            <Text>Arrecadado</Text>
            <Text>R$ {arrecadado}</Text>
          </div>
          <div></div>
          <div>
            <Text>Meta</Text>
            <Text>R$ {meta}</Text>
          </div>
        </footer>
      </CardContent>
    </Card>
  )
}

export default CardCampaign