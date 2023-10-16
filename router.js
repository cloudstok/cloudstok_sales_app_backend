const { findallconfiguration } = require('./controller/configuration')
const { findallmanageservices } = require('./controller/manageservices')
const { findOrder, createOrder, findByIddOrder, updateOrder } = require('./controller/orders')
const {  findUsers, findUser, register, login } = require('./controller/user')
const { verify_token } = require('./lib/jsonwebtoken')

const router = require('express').Router()

router.get('/findAllConfiguration' , findallconfiguration)
router.get('/findAllManageservices' , findallmanageservices)
router.get('/findOrder' ,  verify_token , findOrder)
router.get('/findByIdOrder/:id' , findByIddOrder)
router.post('/createOrder',verify_token, createOrder)
router.put('/updateOrder/:id', updateOrder)
router.post('/register' , register)
router.post('/login' , login)
router.get('/findUsers' , verify_token, findUsers)
router.get('/findUser/:user_id' , findUser)



module.exports = router



