const express=require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/dbName',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

  const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  })
  mongoose.model('User',userSchema)
app.get('/', async (req,res)=>{
    try{
        res.status(200).json({msg:"success"})
    }catch (err){
        res.status(400).json({err:err.msg})
    }
})
app.post("/users", async(req,res)=>{
    const {email,password} = req.body 
    try{
        const user = await User.findOne({email})
        if (!user) return res.status(404).json({ message: 'User not found' });
        console.log(user)
        const newUser = new User({
            email,
            password
        })
        await newUser.save()
        res.status(201).json({
            message: 'User created successfully',
            user: { email,password },
          });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        
    }
})
  const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));