const { findallconfiguration } = require('./controller/configuration')
const { findallmanageservices } = require('./controller/manageservices')
const { findOrder, createOrder, findByIddOrder } = require('./controller/orders')

const router = require('express').Router()

router.get('/findallconfiguration' , findallconfiguration)
router.get('/findallmanageservices' , findallmanageservices)
router.get('/findOrder' , findOrder)
router.get('/findbyIdOrder/:id' , findByIddOrder)
router.post('/createOrder' , createOrder)


module.exports = router



