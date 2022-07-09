import User from "../../Models/User";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let u = new User(req.body)
        await u.save()
        
        res.status(200).json({ success: "Success"})
    }
    else{
        res.status(400).json({ error: "This Method is not allowed"})
    }
}

export default connectDb(handler)