import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/fundo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Viva experiência gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Imagem>
)

export default Banner
