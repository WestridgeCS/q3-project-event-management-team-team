import Student from "../models/Student.js"

export default async function attachStudent(req, res, next) {

  // default values so EJS never crashes
  res.locals.currentStudent = null
  res.locals.role = null

  if (!req.session.studentId) {
    return next()
  }

  try {

    const student = await Student.findById(req.session.studentId)

    res.locals.currentStudent = student
    res.locals.role = req.session.role

  } catch (err) {
    console.error(err)
  }

  next()
}