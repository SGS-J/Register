import mongoose from '../../config/database'
import { genSalt, hash, compare } from 'bcrypt'

const userSchema = new mongoose.Schema({
   username: {type: String , required: true},
   email: {type: String, required: true},
   password: {type: String , required: true},
   created: {type: Date, default: Date.now},
})

userSchema.pre('save', async function (next) {
   const pass = this.password
   const salt = await genSalt(10)
   this.password = await hash(pass, salt)
   next()
})

userSchema.methods.matchPassword = async function (password) {
   return await compare(password, this.password)
}

export default mongoose.model('User', userSchema)

