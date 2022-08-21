import { Card } from './Card'
import capa from '../../imgs/capa.png'
import { CardContent, FinishedCampaign } from './CardCampaign.styled'
import { TextSm, Text, Subtitle, colorHoverMenu, colorTittlePage } from '../../consts'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/pt-br'

const CardCampaign = ({campanha}) => {
  const navigate = useNavigate();

  const dateToFinished = new Date(campanha.dataLimite)
  const currentDate = new Date()
  const isFinished = currentDate > dateToFinished

  return (
    <Card maxWidth="100%" height="350px">
      <CardContent>
        <img src={campanha.fotoCampanha ? campanha.fotoCampanha : capa} />
        <div>
          <div>
            <Subtitle color={colorTittlePage}>{campanha.titulo}</Subtitle>
            <TextSm color={colorHoverMenu} fontWeight="400">{moment(campanha.ultimaAlteracao).startOf('hour').fromNow()}</TextSm>
          </div>
          <button id='verDetalhes' onClick={() => navigate(`/detalhe-campanha/${campanha.idCampanha}`)}>Ver detalhes</button>
        </div>
        <div>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Por:</TextSm> {campanha.nome}
          </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Categoria:</TextSm> <div>{campanha.tags.map(tag => {return(<><span>{tag}</span></>)})}</div>
          </TextSm>
          <TextSm>
            <TextSm color={colorHoverMenu} fontWeight="400">Encerra em:</TextSm> {moment(campanha.dataLimite).format('LL')}
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
        {(campanha.statusMeta === true || isFinished) && <div className="finished"><div><h3>{isFinished ? 'Campanha Finalizada' : campanha.statusMeta ? 'Meta Atingida' : ''}</h3></div></div>}
      </CardContent>
    </Card>
  )
}

export default CardCampaign