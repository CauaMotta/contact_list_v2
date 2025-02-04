import ContactList from './containers/ContactList'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </>
  )
}

export default App
