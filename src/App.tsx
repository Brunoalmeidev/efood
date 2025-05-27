import { BrowserRouter } from 'react-router-dom'
import Router from './'
import GlobalStyle from './global/globalStyles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  )
}

export default App
