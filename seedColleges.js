import mongoose from "mongoose"
import dotenv from "dotenv"

import College from "./models/College.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")


await College.deleteMany({})
console.log("Old colleges cleared")


const colleges = [

{
name: "UCLA",
repName: "Alex Ramirez",
repEmail: "alex.ramirez@ucla.edu",
repPhone: "310-555-1021",
website: "https://www.ucla.edu",
notes: "Large public research university in Los Angeles known for strong programs across many fields.",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "USC",
repName: "Taylor Kim",
repEmail: "taylor.kim@usc.edu",
repPhone: "213-555-2034",
website: "https://www.usc.edu",
notes: "Private research university in Los Angeles with strong alumni network and film school.",
iconPath: "/uploads/collegeIcons/usc.png"
},

{
name: "Stanford",
repName: "Jordan Patel",
repEmail: "jpatel@stanford.edu",
repPhone: "650-555-1102",
website: "https://www.stanford.edu",
notes: "Highly selective research university located in Silicon Valley.",
iconPath: "/uploads/collegeIcons/stanford.png"
},

{
name: "Caltech",
repName: "Dr. Melissa Wong",
repEmail: "mwong@caltech.edu",
repPhone: "626-555-4450",
website: "https://www.caltech.edu",
notes: "Small Pasadena-based institute specializing in science and engineering.",
iconPath: "/uploads/collegeIcons/caltech.png"
},

{
name: "Pomona College",
repName: "Brian Alvarez",
repEmail: "balvarez@pomona.edu",
repPhone: "909-555-1002",
website: "https://www.pomona.edu",
notes: "Liberal arts college in Claremont known for strong academics and small classes.",
iconPath: "/uploads/collegeIcons/pomona.png"
},

{
name: "Harvey Mudd",
repName: "Sarah Nguyen",
repEmail: "snguyen@hmc.edu",
repPhone: "909-555-2231",
website: "https://www.hmc.edu",
notes: "STEM-focused liberal arts college within the Claremont Colleges.",
iconPath: "/uploads/collegeIcons/hmc.png"
},

{
name: "Claremont McKenna",
repName: "David Ortiz",
repEmail: "dortiz@cmc.edu",
repPhone: "909-555-3381",
website: "https://www.cmc.edu",
notes: "Liberal arts college focused on economics, government, and leadership.",
iconPath: "/uploads/collegeIcons/cmc.png"
},

{
name: "Pitzer College",
repName: "Emily Carter",
repEmail: "ecarter@pitzer.edu",
repPhone: "909-555-2100",
website: "https://www.pitzer.edu",
notes: "Claremont college known for interdisciplinary studies and social justice.",
iconPath: "/uploads/collegeIcons/pitzer.png"
},

{
name: "Scripps College",
repName: "Jessica Lee",
repEmail: "jlee@scrippscollege.edu",
repPhone: "909-555-4410",
website: "https://www.scrippscollege.edu",
notes: "Women's liberal arts college within the Claremont Colleges consortium.",
iconPath: "/uploads/collegeIcons/scripps.png"
},

{
name: "UC Berkeley",
repName: "Kevin Brooks",
repEmail: "kbrooks@berkeley.edu",
repPhone: "510-555-9081",
website: "https://www.berkeley.edu",
notes: "Flagship UC campus with strong research and engineering programs.",
iconPath: "/uploads/collegeIcons/berkeley.png"
},

{
name: "UC San Diego",
repName: "Laura Gomez",
repEmail: "lgomez@ucsd.edu",
repPhone: "858-555-3440",
website: "https://www.ucsd.edu",
notes: "Research university known for science, medicine, and oceanography.",
iconPath: "/uploads/collegeIcons/ucsd.png"
},

{
name: "UC Davis",
repName: "Mark Simmons",
repEmail: "msimmons@ucdavis.edu",
repPhone: "530-555-2210",
website: "https://www.ucdavis.edu",
notes: "UC campus known for agriculture, environmental science, and veterinary medicine.",
iconPath: "/uploads/collegeIcons/ucdavis.png"
},

{
name: "UC Santa Barbara",
repName: "Rachel Torres",
repEmail: "rtorres@ucsb.edu",
repPhone: "805-555-2022",
website: "https://www.ucsb.edu",
notes: "Coastal UC campus with strong programs in physics and engineering.",
iconPath: "/uploads/collegeIcons/ucsb.png"
},

{
name: "NYU",
repName: "Chris Bennett",
repEmail: "cbennett@nyu.edu",
repPhone: "212-555-1009",
website: "https://www.nyu.edu",
notes: "Private research university in New York City with global campuses.",
iconPath: "/uploads/collegeIcons/nyu.png"
},

{
name: "Columbia",
repName: "Sophia Rivera",
repEmail: "srivera@columbia.edu",
repPhone: "212-555-3012",
website: "https://www.columbia.edu",
notes: "Ivy League university located in New York City.",
iconPath: "/uploads/collegeIcons/columbia.png"
},

{
name: "University of Chicago",
repName: "Daniel Cho",
repEmail: "dcho@uchicago.edu",
repPhone: "773-555-9020",
website: "https://www.uchicago.edu",
notes: "Research university known for economics and intellectual rigor.",
iconPath: "/uploads/collegeIcons/chicago.png"
},

{
name: "Duke",
repName: "Amanda Hill",
repEmail: "ahill@duke.edu",
repPhone: "919-555-1190",
website: "https://www.duke.edu",
notes: "Private research university in North Carolina with strong athletics and academics.",
iconPath: "/uploads/collegeIcons/duke.png"
},

{
name: "Northwestern",
repName: "Matthew Greene",
repEmail: "mgreene@northwestern.edu",
repPhone: "847-555-4451",
website: "https://www.northwestern.edu",
notes: "Research university near Chicago known for journalism and business.",
iconPath: "/uploads/collegeIcons/northwestern.png"
},

{
name: "Brown",
repName: "Olivia Adams",
repEmail: "oadams@brown.edu",
repPhone: "401-555-3310",
website: "https://www.brown.edu",
notes: "Ivy League university known for its open curriculum.",
iconPath: "/uploads/collegeIcons/brown.png"
},

{
name: "Cornell",
repName: "Peter Lawson",
repEmail: "plawson@cornell.edu",
repPhone: "607-555-1199",
website: "https://www.cornell.edu",
notes: "Ivy League university with strengths in engineering and agriculture.",
iconPath: "/uploads/collegeIcons/cornell.png"
},

{
name: "Yale",
repName: "Grace Foster",
repEmail: "gfoster@yale.edu",
repPhone: "203-555-5001",
website: "https://www.yale.edu",
notes: "Ivy League university known for law, humanities, and residential college system.",
iconPath: "/uploads/collegeIcons/yale.png"
}

]


await College.insertMany(colleges)

console.log("Colleges seeded successfully")

mongoose.connection.close()