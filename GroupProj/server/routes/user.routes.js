const mongoose = require('mongoose');

const userSchema = ({
    name: {
        type:String,
        require: [true, "Name is required"]
    },
    email:{
        type:String,
        require: [true, "Email is required"]
    },
    password: String
})

const User = mongoose.model("User", userSchema)

module.exports = (app) => {

    app.post("/api/login", (req, res)=> {
        const { email, password} = req.body
        User.findOne({ email: email}, (err, user) => {
            if(user){
                if(password === user.password ) {
                    res.send({message: "Login Successfull", user: user})
                } else {
                    res.send({ message: "Password didn't match"})
                }
            } else {
                res.send({message: "User not registered"})
            }
        })
    }) 

    app.post("/api/register", (req, res)=> {
        const { name, email, password} = req.body
        User.findOne({email: email}, (err, user) => {
            if(user){
                res.send({message: "User already registered"})
            } else {
                const user = new User({
                    name,
                    email,
                    password
                })
                user.save(err => {
                    if(err) {
                        res.send(err)
                    } else {
                        res.send( { message: "Successfully Registered." })
                    }
                })
            }
        })
        
    }) 
}