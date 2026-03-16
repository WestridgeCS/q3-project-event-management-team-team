import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
  name:String,
  studentId:String,
  email:String,
  passwordHash:String,
  role:{
    type:String,
    enum:["student","admin"]
  }
})

export default mongoose.model("Student",studentSchema)