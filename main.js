import { httpRequest } from 'http-request';
import { logger } from 'log';

// Instantiate with JSON.parse is much faster than literal object


export function onClientRequest (request) {
    let jsonWebToken = request.getHeader('jwt');
    logger.log(jsonWebToken);
}
