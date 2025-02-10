import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ActiveState = {
  editing: boolean
  removing: boolean
}

const initialState: ActiveState = {
  editing: false,
  removing: false
}

const ActiveModeSlice = createSlice({
  name: 'activeMode',
  initialState,
  reducers: {
    changeEditing: (state, action: PayloadAction<boolean>) => {
      state.editing = action.payload
    },
    changeRemoving: (state, action: PayloadAction<boolean>) => {
      state.removing = action.payload
    }
  }
})

export const { changeEditing, changeRemoving } = ActiveModeSlice.actions
export default ActiveModeSlice.reducer
