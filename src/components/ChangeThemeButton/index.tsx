import { useEffect, useState } from 'react'
import { ThemeButton } from './styles'
import { changeTheme } from '../../store/reducers/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ChangeThemeButton = () => {
  const { type } = useSelector((state: RootReducer) => state.theme)
  const [theme, setTheme] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setTheme(type)
  }, [type])

  const updateTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      dispatch(changeTheme('light'))
    } else {
      setTheme('dark')
      dispatch(changeTheme('dark'))
    }
  }

  return (
    <>
      <ThemeButton onClick={updateTheme}>
        {theme === 'dark' ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}{' '}
        Mudar tema
      </ThemeButton>
    </>
  )
}

export default ChangeThemeButton
