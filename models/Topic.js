import mongoose from "mongoose"

const topicSchema = new mongoose.Schema({
  title:String,
  //optional email for head organizer (ex if a specific club/affinity is hosting the meeting or topic)
  organizerEmail:String,
  description:String,
  notes:String
})

export default mongoose.model("Topic",topicSchema)