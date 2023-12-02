
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    imageaddress:{
        type:String,
        required:true 
    }
});
const User =  mongoose.models.framesUrl || mongoose.model('framesUrl', userSchema);
export default User;
