
import connectDB from "./Backend/connectDB";
import user from "./Backend/User_Schema";
connectDB();
export default async function handler(req, res) {
    if(req.method==='POST'){
  const {imageaddress} = req.body
     try {
            const saved =new user ({imageaddress})
            await saved.save();
            res.status(201).json({message:"images Saved"});
     } catch (error) {
        console.log(error);
     }
    }
    if(req.method==='GET'){
        try {
        const response = await user.find({});
        res.status(202).json({response});
          } catch (error) {
             console.log(error);
          }
    }
  }
  