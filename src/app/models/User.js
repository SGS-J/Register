const mongoose = require('../../config/database')
const {Schema} = require('../../config/database')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
   username: {type: String , required: true},
   email: {type: String, required: true},
   password: {type: String , required: true},
   created: {type: Date, default: Date.now},
})

userSchema.pre('save', async function (next) {
   const pass = this.password
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(pass, salt)
   next()
})

userSchema.methods.matchPassword = async function (password) {
   return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', userSchema)

