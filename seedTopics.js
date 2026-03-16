import mongoose from "mongoose"
import dotenv from "dotenv"

import Topic from "./models/Topic.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")


await Topic.deleteMany({})
console.log("Old topics cleared")


const topics = [

{
title: "Justice",
organizerEmail: "studentVoices@westridge.org",
description: "Large public research university in Los Angeles known for strong programs across many fields."
},

{
title: "Equity",
organizerEmail: "studentVoices@westridge.org",
description: "Large public research university in Los Angeles known for strong programs across many fields."
},

{
title: "Diversity",
organizerEmail: "studentVoices@westridge.org",
description: "Large public research university in Los Angeles known for strong programs across many fields."
},

{
title: "Inclusion",
organizerEmail: "studentVoices@westridge.org",
description: "Large public research university in Los Angeles known for strong programs across many fields."
}

]


await Topic.insertMany(topics)

console.log("Topics seeded successfully")

mongoose.connection.close()