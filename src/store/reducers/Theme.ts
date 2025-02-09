import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { darkTheme, lightTheme } from '../../themes'

type ThemeState = {
  theme: typeof darkTheme
  type: string
}

const initialState: ThemeState = {
  theme: darkTheme,
  type: 'dark'
}

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.type = action.payload === 'dark' ? 'dark' : 'light'
      state.theme = action.payload === 'dark' ? darkTheme : lightTheme
    }
  }
})

export const { changeTheme } = ThemeSlice.actions
export default ThemeSlice.reducer
