import { Logo } from "../logo/Logo"
import { FooterContainer } from './Footer.styled.js'

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <Logo />
          <h2>Colabore</h2>
        </div>
        <div>
          <p>©2022 Colabore.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </FooterContainer>
  )
}
export default Footer