import { logger } from 'log';

export function onClientRequest (request) {
    const jwtHeader = request.getHeader('jwt');
    const jwtHeaderString = JSON.stringify(jwtHeader);
    logger.log(jwtHeaderString);
    
    let jwtBase64Payload = jwtHeaderString.split('.')[1];
    logger.log(jwtBase64Payload);
}