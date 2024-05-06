import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import AuctionController from "./controller/auction_controller"
import AuctionService from "./usecase/auction_service"
import MockAuctionServiceFactory from "./controller/mock_auction_service_factory"

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    const auctionService = new MockAuctionServiceFactory().create()
    const auctionController = new AuctionController(auctionService)
    return auctionController.connectAuctionItemToAuction(event)
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "some error happened",
      }),
    }
  }
}
