import { Card } from './Card'
import capa from '../../imgs/capa.png'
import { CardContent } from './CardCampaignDetail.styled'
import { TextSm, Text, Subtitle, colorHoverMenu, colorTittlePage } from '../../consts'
import { useNavigate } from 'react-router-dom'

const CardCampaignDetail = ({img, campaignTitle, criador, tag, dataFinal, descricao}) => {

  return (
    <Card maxWidth="100%" minHeight="700px">
      <CardContent>
        <img src={capa} />
        <div>
          <div>
            <Subtitle color={colorTittlePage}>{campaignTitle}</Subtitle>
            <TextSm color={colorHoverMenu} fontWeight="400">Há 5 minutos</TextSm>
          </div>
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
        <div>
          <p>
            {descricao} 
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardCampaignDetail