import { Provider } from 'react-redux'

import ContactList from './containers/ContactList'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
