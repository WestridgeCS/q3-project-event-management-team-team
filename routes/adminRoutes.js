import express from 'express'

import Topic from '../models/Topic.js'
import Student from '../models/Student.js'
import Testimony from '../models/Testimony.js'

import requireLogin from '../middleware/requireLogin.js'
import requireAdmin from '../middleware/requireAdmin.js'

const router = express.Router()

import multer from "multer"
import path from "path"

// Admin dashboard
router.get('/', requireLogin, requireAdmin, (req, res) => {
  res.render('admin/dashboard')
})

// Topic dashboard
router.get('/topics', requireLogin, requireAdmin, async (req, res) => {
  const topics = await Topic.find()

  res.render('admin/topics', { topics })
})

router.get('/topics/:id', requireLogin, requireAdmin, async (req,res) =>{
  const testimonies = await Testimony.find()

  res.render('admin/topics/:id', { topic, testimonies })
})

// Students dashboard
router.get('/students', requireLogin, requireAdmin, async (req, res) => {
  const students = await Student.find({ role: 'student' })
  const data = []

  for (let student of students) {
    const testimony = await Testimony
      .find({ student: student._id })
      .populate('topic')

    data.push({
      student,
      testimonyCount: testimony.length
    })

  }

  res.render('admin/students', { data })
})

// Student detail page
router.get('/students/:id', requireLogin, requireAdmin, async (req, res) => {
  const student = await Student.findById(req.params.id)

  const testimonies = await Testimony
    .find({ student: req.params.id })
    .populate('topic')

  res.render('admin/studentDetail', {
    student,
    testimonies
  })
})

// Delete a testimony 
router.post('/topics/:id/delete', requireLogin, requireAdmin, async (req,res)=>{
  await Testimony.findByIdAndDelete(req.params.id)
  res.redirect("/admin/topics/:id")
})

export default router