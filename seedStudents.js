import mongoose from "mongoose"
import dotenv from "dotenv"

import User from "./models/User.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)

console.log("Connected to MongoDB")

// Clear existing students
await User.deleteMany({ role: "student" })

console.log("Old students removed")


const students = [

{
  name: "Ava Martinez",
  studentId: "1001",
  email: "ava.martinez@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Liam Chen",
  studentId: "1002",
  email: "liam.chen@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Sophia Patel",
  studentId: "1003",
  email: "sophia.patel@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Noah Thompson",
  studentId: "1004",
  email: "noah.thompson@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Isabella Rodriguez",
  studentId: "1005",
  email: "isabella.rodriguez@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Ethan Nguyen",
  studentId: "1006",
  email: "ethan.nguyen@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Mia Johnson",
  studentId: "1007",
  email: "mia.johnson@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Lucas Garcia",
  studentId: "1008",
  email: "lucas.garcia@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Charlotte Kim",
  studentId: "1009",
  email: "charlotte.kim@westridge.edu",
  passwordHash: null,
  role: "student"
},

{
  name: "Benjamin Walker",
  studentId: "1010",
  email: "benjamin.walker@westridge.edu",
  passwordHash: null,
  role: "student"
}

]


await User.insertMany(students)

console.log("Students seeded successfully")

mongoose.connection.close()