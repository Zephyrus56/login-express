const router = require('express').Router()
const { signIn, createAccount, checkUser, updateUser, deleteUser } = require('./user.controller')
const { checkBearer, checkAdmin } = require('../../middleware/jwt.middleware')

router.post('/signin', signIn)
router.post('/', createAccount)
router.get('/', checkBearer, checkUser)
router.put('/', checkBearer, updateUser)
router.delete('/', checkBearer, deleteUser)

module.exports = router