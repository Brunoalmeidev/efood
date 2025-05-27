import Logo from '../Logo'

import {
  Text,
  Title,
  TitleLink
} from './styles'

import LogoImage from '../../assets/images/logo.svg'

type HeroProps = {
  title?: string
  textContent?: string
}

const Hero = () => {
  function renderHeaderContent(item: string | undefined) {
    return (
      <>
        <TitleLink to="/">{item}</TitleLink>
        <Logo kind="link" cover={LogoImage} title="Logo eFood" to="/" />
      </>
    )
  }

  return <Logo kind="link" cover={LogoImage} title "Logo efood" to="/" />
}
