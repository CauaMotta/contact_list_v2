import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  term?: string
  favorites: boolean
}

const initialState: FilterState = {
  term: '',
  favorites: false
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<boolean>) => {
      state.favorites = action.payload
    }
  }
})

export const { changeTerm, changeFilter } = filterSlice.actions
export default filterSlice.reducer
