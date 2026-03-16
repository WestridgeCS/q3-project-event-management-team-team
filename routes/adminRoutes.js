import express from 'express'

import College from '../models/College.js'
import User from '../models/User.js'
import Visit from '../models/Visit.js'

import requireLogin from '../middleware/requireLogin.js'
import requireAdmin from '../middleware/requireAdmin.js'

const router = express.Router()

import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"uploads/collegeIcons")
  },

  filename: (req,file,cb)=>{
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

// Admin dashboard
router.get('/', requireLogin, requireAdmin, (req, res) => {
  res.render('admin/dashboard')
})

// Colleges dashboard
router.get('/colleges', requireLogin, requireAdmin, async (req, res) => {
  const colleges = await College.find()

  res.render('admin/colleges', { colleges })
})


// Students dashboard
router.get('/students', requireLogin, requireAdmin, async (req, res) => {
  const students = await User.find({ role: 'student' })
  const data = []

  for (let student of students) {
    const visits = await Visit
      .find({ student: student._id })
      .populate('college')

    const interested = visits.filter(v => v.interested)

    data.push({
      student,
      visitCount: visits.length,
      interested
    })

  }

  res.render('admin/students', { data })
})

// Student detail page
router.get('/students/:id', requireLogin, requireAdmin, async (req, res) => {
  const student = await User.findById(req.params.id)

  const visits = await Visit
    .find({ student: req.params.id })
    .populate('college')

  res.render('admin/studentDetail', {
    student,
    visits
  })
})

// GET - Add a new college
router.get('/colleges/new', requireLogin, requireAdmin, (req,res)=>{
  res.render('admin/newCollege')
})

// GET - Edit a college
router.get('/colleges/:id/edit', requireLogin, requireAdmin, async (req,res)=>{
  const college = await College.findById(req.params.id)
  res.render('admin/editCollege',{college})
})

// POST - Add a new college
router.post('/colleges', requireLogin, requireAdmin, upload.single("icon"), async (req,res)=>{
  const {
    name,
    repName,
    repEmail,
    repPhone,
    website,
    notes
  } = req.body

  const college = new College({
    name,
    repName,
    repEmail,
    repPhone,
    website,
    notes
  })

  if (req.file) {
    college.iconPath = "/uploads/collegeIcons/" + req.file.filename
  }

  await college.save()

  res.redirect("/admin/colleges")
})

// POST - Edit a college
router.post('/colleges/:id', requireLogin, requireAdmin, upload.single("icon"), async (req,res)=>{
  const college = await College.findById(req.params.id)

  college.name = req.body.name
  college.repName = req.body.repName
  college.repEmail = req.body.repEmail
  college.repPhone = req.body.repPhone
  college.website = req.body.website
  college.notes = req.body.notes

  if (req.file) {
    college.iconPath = "/uploads/collegeIcons/" + req.file.filename
  }

  await college.save()

  res.redirect("/admin/colleges")
})

// Delete a college
router.post('/colleges/:id/delete', requireLogin, requireAdmin, async (req,res)=>{
  await College.findByIdAndDelete(req.params.id)
  res.redirect("/admin/colleges")
})

export default router