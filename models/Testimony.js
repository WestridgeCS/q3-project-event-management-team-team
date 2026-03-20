import mongoose from "mongoose"

const testimonySchema = new mongoose.Schema({
  student:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Student"
  },
  topic:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Topic"
  },
  notes:String,
  published:Boolean
})

export default mongoose.model("Testimony",testimonySchema)