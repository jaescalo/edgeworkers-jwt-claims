import { logger } from 'log';

export function onClientRequest (request) {
    let jsonWebToken = request.getHeader('jwt');
    logger.log(jsonWebToken);
}