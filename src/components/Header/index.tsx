import { HeaderLogo } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderLogo>
    <img src={logo} alt="EFOOD" />
  </HeaderLogo>
)

export default Header
