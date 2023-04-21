const Router = require('express')
const router = new Router()
const alexaController = require('/controllers/alexaController')

router.get('/hello-world', alexaController.helloWorld)


module.exports = router