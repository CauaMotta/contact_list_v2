import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Nome de Teste da Silva',
      email: 'testedasilva@gmail.com',
      phone: '(48) 9 99999999',
      favorite: false
    },
    {
      id: 2,
      name: 'Carinha que mora logo ali',
      email: 'mepassa1dolar@gmail.com',
      phone: '(11) 1 11111111',
      favorite: true
    },
    {
      id: 3,
      name: 'Seu Jorge',
      email: 'burgesinha@gmail.com',
      phone: '(00) 1 23456789',
      favorite: false
    }
  ]
}

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFavorite: (
      state,
      action: PayloadAction<{ id: number; favorite: boolean }>
    ) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        state.items[index].favorite = action.payload.favorite
      }
    }
  }
})

export const { changeFavorite } = ContactSlice.actions
export default ContactSlice.reducer
