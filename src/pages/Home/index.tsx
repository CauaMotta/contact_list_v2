import ContactList from '../../containers/ContactList'
import Sidebar from '../../containers/Sidebar'

const Home = () => {
  return (
    <>
      <Sidebar showFilters />
      <ContactList />
    </>
  )
}

export default Home
