const Router = require('express').Router
const router = new Router()

const alexaRoute = require('./alexaRoute');




router.use('/alexa', alexaRoute);


module.exports = router

