import { Logo } from "../logo/Logo"
import noUserImg from '../../imgs/no-user.jpeg'
import { HeaderContainer } from './Header.styled.js'

const Header = ({userName, userImg}) => {
  return (
    <HeaderContainer>
      <div>
        <div>
          <Logo />
          <h2>Colabore</h2>
        </div>
        <div>
          <span>{userName}</span>
          <img src={userImg ? userImg : noUserImg} alt="Foto de perfil do usuário." />
        </div>
      </div>  
    </HeaderContainer>
  )
}
export default Header