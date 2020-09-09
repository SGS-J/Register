import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/userdata', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(db => {
   console.log(`MongoDb is connect on ${db.connection.host}`);
})
.catch(err => {
   console.error(err);
})

export default mongoose
