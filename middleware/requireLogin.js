export default function requireLogin(req,res,next){
  if (!req.session.studentId) {
    return res.redirect("/login");
  }

  next()
}