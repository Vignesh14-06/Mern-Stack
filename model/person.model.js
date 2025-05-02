import { model,Schema } from "mongoose"

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }

})


const PersonsData = model("personsData",userSchema)

export default PersonsData