
import connectDB from "./Backend/connectDB";
import user from "./Backend/User_Schema";
connectDB();
export default async function handler(req, res) {
    if(req.method==='POST'){
      const {item} = req.body
      try {
      
      const response = await user.deleteOne({imageaddress:item});
      if(response){
         res.status(202).json({response});
      }else{
        
      res.status(202).json({text:"not deleted"});
      }
        } catch (error) {
           console.log(error);
        }
  }
  }