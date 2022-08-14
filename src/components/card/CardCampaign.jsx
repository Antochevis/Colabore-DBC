import { Card } from './Card'
import capa from '../../imgs/testecard.jpg'
import { CardContent } from './CardCampaign.styled'
import { Button } from '../button/Button'

const CardCampaign = ({img, campaignTitle, criador, tag, dataFinal, arrecadado, meta}) => {
  return (
    <Card maxWidth="420px" height="350px">
      <CardContent>
        <img src={capa} />
        <div>
          <div>
            <h3>{campaignTitle}</h3>
            <span>Há 5 minutos</span>
          </div>
          <button>Ver detalhes</button>
        </div>
        <div>
          <p>Por: {criador}</p>
          <p>Categoria: {tag}</p>
          <p>Colabore até {dataFinal}</p>
        </div>
        <footer>
          <div>
            <p>Arrecadado</p>
            <span>{arrecadado}</span>
          </div>
          <div>
            <p>Meta</p>
            <span>{meta}</span>
          </div>
        </footer>
      </CardContent>
    </Card>
  )
}

export default CardCampaign