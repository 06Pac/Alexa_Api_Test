const alexaService = require('/service/alexaService')
class AlexaController {
    async helloWorld(req, res){
    try {
        const {handlerInput} = req.params;
        alexaService.HelloWorldIntentHandler.canHandle(handlerInput); // Call the canHandle method of HelloWorldIntentHandler
    }catch (e) {
        console.log(e)
         }
    }

}
module.exports = new AlexaController()