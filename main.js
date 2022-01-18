import { logger } from 'log';

export function onClientRequest (request) {
    let jsonWebToken = request.getHeader('jwt');
    //let base64Payload = jsonWebToken.split('.')[1];
    const jwtParts = jsonWebToken.split('.');
    const payloadInBase64UrlFormat = jwtParts[1];
    logger.log(payloadInBase64UrlFormat);
}