class Contact {
  id: number
  name: string
  email: string
  phone: string
  favorite: boolean

  constructor(
    id: number,
    name: string,
    email: string,
    phone: string,
    favorite: boolean
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.favorite = favorite
  }
}

export default Contact
