import express from 'express'
import bcrypt from 'bcrypt'
import Student from '../models/Student.js'

const router = express.Router()

// Login page
router.get('/', (req, res) => {
  res.redirect('/login')
})

// Login page
router.get('/login', (req, res) => {
  res.render('auth/login')
})

// Student login
router.post("/login/student", async (req, res) => {
  const { name, studentId } = req.body;
  console.log(req.body);
  const student = await Student.findOne({
    name,
    studentId,
    role: "student",
  });
  console.log(student);
  if (!student) {
    return res.redirect("/login");
  }

  req.session.studentId = student._id;
  req.session.role = "student";
  console.log(req.session);
  res.redirect("/student");
});

// Admin login
router.post('/login/admin', async (req, res) => {
  const { email, password } = req.body

  const student = await Student.findOne({
    email,
    role: 'admin'
  })

  if (!student) {
    return res.redirect('/login')
  }

  const valid = await bcrypt.compare(password, student.passwordHash)

  if (!valid) {
    return res.redirect('/login')
  }

  req.session.studentId = student._id
  req.session.role = 'admin'

  res.redirect('/admin')
})

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login')
  })
})

// Admin registration page (invite only)
router.get('/admin/register', (req, res) => {
  if (req.query.token !== process.env.ADMIN_INVITE_TOKEN) {
    return res.status(403).send("Unauthorized")
  }

  res.render('auth/registerAdmin', {
    token: req.query.token
  })
})


// Create admin account
router.post('/admin/register', async (req, res) => {
  if (req.body.token !== process.env.ADMIN_INVITE_TOKEN) {
    return res.status(403).send("Unauthorized")
  }

  const { name, email, password } = req.body

  const existing = await Student.findOne({ email })

  if (existing) {
    return res.send("Admin already exists with that email.")
  }

  const hash = await bcrypt.hash(password, 10)

  const admin = new Student({
    name,
    email,
    passwordHash: hash,
    role: "admin"
  })

  await admin.save()

  res.redirect('/login')
})

export default router