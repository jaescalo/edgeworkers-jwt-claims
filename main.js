import { logger } from 'log';

function onClientRequest (request) {
    let jsonWebToken = request.getHeader('jwt');
    let base64Payload = jsonWebToken.split('.')[1];
    logger.log(base64Payload);

}

export { onClientRequest };
