import mongoose from "mongoose"

const collegeSchema = new mongoose.Schema({
  name:String,
  repName:String,
  repEmail:String,
  repPhone:String,
  website:String,
  notes:String,
  iconPath:String
})

export default mongoose.model("College",collegeSchema)