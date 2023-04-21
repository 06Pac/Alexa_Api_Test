const Alexa = require('ask-sdk-core');
const skillBuilder = Alexa.SkillBuilders.custom();

class AlexaService {

    /*
    The function LaunchRequestHandler is a static object with two methods: canHandle and handle.
    This object is intended to be used as a request handler for a specific type of request in an Amazon Alexa skill.

    The canHandle method is a function that takes a handlerInput object as a parameter.
    The handlerInput object represents the input provided to the skill, such as the request type, intent, and other relevant information.
    The canHandle method uses the Alexa.getRequestType function to determine if the request type in the handlerInput object is a 'LaunchRequest'.
    If it is, the canHandle method returns true, indicating that this request handler can handle the request.
    Otherwise, it returns false, indicating that this request handler cannot handle the request.

    The handle method is another function that takes the same handlerInput object as a parameter.
    It is responsible for handling the request if the canHandle method returns true.
    In this case, the handle method generates a spoken output message (speakOutput) which says "Welcome, you can say Hello or Help.
    Which would you like to try?". It then uses the handlerInput.responseBuilder object to construct the response to be sent back to the Alexa service.
    The response includes the speakOutput message as the speech output, and sets the same message as a reprompt in case the user does not respond.
    Finally, the getResponse() method is called on the responseBuilder object to generate the response object that will be sent back to the Alexa service.

    */
    static LaunchRequestHandler = {
        canHandle(handlerInput) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
        },
        handle(handlerInput) {
            const speakOutput = 'Welcome, you can say Hello or Help. Which would you like to try?';

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    };

    static HelloWorldIntentHandler = {
        canHandle(handlerInput) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
        },
        handle(handlerInput) {
            const speakOutput = 'Hello World!';

            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
    };

    static HelpIntentHandler = {
        canHandle(handlerInput) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
        },
        handle(handlerInput) {
            const speakOutput = 'You can say hello to me! How can I help?';

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    };

    static CancelAndStopIntentHandler = {
        canHandle(handlerInput) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                    || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
        },
        handle(handlerInput) {
            const speakOutput = 'Goodbye!';

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
    };

    /* *
     * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
     * It must also be defined in the language model (if the locale supports it)
     * This handler can be safely added but will be ingnored in locales that do not support it yet
     * */
    static FallbackIntentHandler = {
        canHandle(handlerInput) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
        },
        handle(handlerInput) {
            const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    };
}
module.exports = new AlexaService()
