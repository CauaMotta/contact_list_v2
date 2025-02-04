import Contact from '../../components/Contact'
import { Title } from '../../styles'
import { MainContainer } from './styles'

const ContactList = () => {
  return (
    <MainContainer>
      <Title>Mostrando todos os contatos</Title>
      <Contact />
    </MainContainer>
  )
}

export default ContactList
