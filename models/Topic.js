import mongoose from "mongoose"

const organizerSchema = new mongoose.Schema({
  name:String,
  repEmail:String,
  repPhone:String,
  website:String,
  notes:String,
  iconPath:String
})

export default mongoose.model("College",collegeSchema)