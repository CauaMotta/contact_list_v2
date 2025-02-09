import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/Contacts'
import filterReducer from './reducers/Filter'
import themeReducer from './reducers/Theme'

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
    theme: themeReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
