import { Card } from './Card'

const CardCampaign = ({img, campaignTitle}) => {
  return (
    <Card maxWidth="420px" height="350px">
      <h1>{campaignTitle}</h1>
    </Card>
  )
}

export default CardCampaign