import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const translate: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    message: 'OK'
  };
}
