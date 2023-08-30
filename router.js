const { findallconfiguration } = require('./controller/configuration')
const { findallmanageservices } = require('./controller/manageservices')
const { findOrder, createOrder, findByIddOrder } = require('./controller/orders')
const {  findUsers, findUser, register, login } = require('./controller/user')

const router = require('express').Router()

router.get('/findAllConfiguration' , findallconfiguration)
router.get('/findAllManageservices' , findallmanageservices)
router.get('/findOrder' , findOrder)
router.get('/findByIdOrder/:id' , findByIddOrder)
router.post('/createOrder' , createOrder)
router.post('/register' , register)
router.post('/login' , login)
router.get('/findUsers' , findUsers)
router.get('/findUser/:user_id' , findUser)



module.exports = router



