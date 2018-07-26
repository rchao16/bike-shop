const router = require('express').Router()
const {Order, OrderEntry} = require('../db/models')
module.exports = router


router.get('/', async (req,res,next) => {
  try {
    const order = await Order.findAll(
      {include: [{model: OrderEntry}]})
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req,res,next) => {
  try {
    const order = await Order.findById(req.params.id,
      {include: [{model: OrderEntry}]})
    res.json(order)
  } catch (err) {
    next(err)
  }
})