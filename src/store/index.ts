import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/Contacts'
import filterReducer from './reducers/Filter'

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
