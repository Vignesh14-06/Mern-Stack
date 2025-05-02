import { model,Schema } from "mongoose"

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email Id is required"],
        unique:true
    },
    address:{
        type:String,
        required:[,"Address is required"]
    }

})


const PersonsData = model("personsData",userSchema)

export default PersonsData