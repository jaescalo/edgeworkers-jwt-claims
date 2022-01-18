import { httpRequest } from 'http-request';
import { logger } from 'log';

// Instantiate with JSON.parse is much faster than literal object


export function onClientRequest (request) {
    let jsonWebToken = request.getHeader('jwt');
    let base64Payload = jsonWebToken.split('.')[1];
    logger.log(base64Payload);

    let decodedPayload = JSON.parse(window.atob(base64Payload));
    logger.log(decodedPayload);
}
