import User from "../models/User.js"

export default async function attachUser(req, res, next) {

  // default values so EJS never crashes
  res.locals.currentUser = null
  res.locals.role = null

  if (!req.session.userId) {
    return next()
  }

  try {

    const user = await User.findById(req.session.userId)

    res.locals.currentUser = user
    res.locals.role = req.session.role

  } catch (err) {
    console.error(err)
  }

  next()
}