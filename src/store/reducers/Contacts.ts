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
    },
    edit: (
      state,
      action: PayloadAction<{ id: number; email: string; phone: string }>
    ) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        if (action.payload.email.length > 0) {
          state.items[index].email = action.payload.email
        }
        if (action.payload.phone.length > 0) {
          state.items[index].phone = action.payload.phone
        }
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload)
      ]
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExist = state.items.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (contactExist) {
        alert('Contato ja existente!')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { changeFavorite, edit, remove, register } = ContactSlice.actions
export default ContactSlice.reducer
