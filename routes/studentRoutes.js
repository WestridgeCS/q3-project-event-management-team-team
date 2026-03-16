import express from 'express'

import Topic from '../models/Topic.js'
import Testimony from '../models/Testimony.js'
import Student from '../models/Student.js'

import requireLogin from '../middleware/requireLogin.js'


const router = express.Router()


// Student dashboard
router.get('/', requireLogin, async (req, res) => {
  const topics = await Topic.find()
  res.render('student/dashboard', { topics })
})

// View topic page
router.get('/topic/:id', requireLogin, async (req, res) => {
  const topic = await Topic.findById(req.params.id)

  const testimony = await Testimony.findOne({
    student: req.session.studentId,
    topic: req.params.id
  })

  res.render('student/topic', {
    topic,
    testimony
  })

})


// Save visit notes
router.post('/topic/:id', requireLogin, async (req, res) => {
  const { notes, published } = req.body

  let testimony = await Testimony.findOne({
    student: req.session.studentId,
    topic: req.params.id
  })

  if (!testimony) {
    testimony = new Visit({
      student: req.session.studentId,
      topic: req.params.id
    })
  }

  testimony.notes = notes
  testimony.published = published === 'off'

  await testimony.save()

  res.redirect('/student')
})

// Student profile page
router.get('/profile', requireLogin, async (req, res) => {
  const testimonies = await Testimony
    .find({ student: req.session.sessiontudentId })
    .populate('topic')

  res.render('student/profile', {
    testimonies
  })
})

export default router