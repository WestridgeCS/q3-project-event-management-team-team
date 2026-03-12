import mongoose from "mongoose"

const visitSchema = new mongoose.Schema({
  student:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  college:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"College"
  },
  notes:String,
  interested:Boolean
})

export default mongoose.model("Visit",visitSchema)