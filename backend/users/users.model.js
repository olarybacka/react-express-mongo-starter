import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
  },
  { collection: 'User' }
)

let User = mongoose.model('User', UserSchema)


export default User
