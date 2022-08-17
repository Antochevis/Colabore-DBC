import { Card } from './Card'
import capa from '../../imgs/capa.png'
import { CardContent } from './CardCampaign.styled'
import { TextSm, Text, Subtitle, colorHoverMenu, colorTittlePage } from '../../consts'
import { useNavigate } from 'react-router-dom'

const CardCampaign = ({img, campaignTitle, criador, tag, dataFinal, arrecadado, meta}) => {

  const navigate = useNavigate();

  return (
    <Card maxWidth="100%" height="350px">
      <CardContent>
        <img src={capa} />
        <div>
          <div>
            <Subtitle color={colorTittlePage}>{campaignTitle}</Subtitle>
            <TextSm color={colorHoverMenu} fontWeight="400">Há 5 minutos</TextSm>
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
            <TextSm color={colorHoverMenu} fontWeight="400">Colabore até:</TextSm>  {dataFinal}
            </TextSm>
        </div>
        <footer>
          <div>
            <Text>Arrecadado</Text>
            <Text>{arrecadado}</Text>
          </div>
          <div></div>
          <div>
            <Text>Meta</Text>
            <Text>{meta}</Text>
          </div>
        </footer>
      </CardContent>
    </Card>
  )
}

export default CardCampaign