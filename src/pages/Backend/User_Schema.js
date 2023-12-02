
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    imageaddress:{
        type:String,
        required:true 
    }
});
let User;
try {
  User = mongoose.model('framesUrl');
} catch {
  User = mongoose.model('framesUrl', userSchema);
}
export default User;
