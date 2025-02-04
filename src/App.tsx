import Sidebar from './containers/Sidebar/Index'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
      </Container>
    </>
  )
}

export default App
