
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    imageaddress:{
        type:String,
        required:true 
    }
});
const User =  mongoose.model.framesUrl || mongoose.model('framesUrl', userSchema);
export default User;
