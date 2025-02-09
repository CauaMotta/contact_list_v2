import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle, { Container } from './styles'
import Home from './pages/Home'
import NewContact from './pages/NewContact'
import { useSelector } from 'react-redux'
import { RootReducer } from './store'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <NewContact />
  }
])

function App() {
  const { theme } = useSelector((state: RootReducer) => state.theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </ThemeProvider>
  )
}

export default App
