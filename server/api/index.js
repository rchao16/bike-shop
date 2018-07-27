const router = require('express').Router()
module.exports = router

// -----> /api/......
router.use('/users', require('./users'))
router.use('/bikes', require('./bikes'))
router.use('/carts', require('./carts'))
router.use('/review', require('./review'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
