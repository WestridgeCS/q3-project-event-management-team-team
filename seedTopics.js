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
    description:
      "How do you define justice? How is justice implemented on Westridge campus? How can we improve justice in our community?",
  },

  {
    title: "Equity",
    organizerEmail: "studentVoices@westridge.org",
    description:
      "How do you define equity? How can we improve equity in our community? How well is equity enforced on Westridge campus?",
  },

  {
    title: "Diversity",
    organizerEmail: "studentVoices@westridge.org",
    description: "How can we improve diversity in our community?",
  },

  {
    title: "Inclusion",
    organizerEmail: "studentVoices@westridge.org",
    description: "How can we improve inclusion  in our community?",
  },
];


await Topic.insertMany(topics)

console.log("Topics seeded successfully")

mongoose.connection.close()