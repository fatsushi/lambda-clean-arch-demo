import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import ConnectAuctionItemInputData from "../usecase/connect_auction_item_inputdata"
import IAuctionInputBoundary from "../usecase/i_auction_input_boundary"

export default class AuctionController {
  constructor(private auctionService: IAuctionInputBoundary) {}

  public connectAuctionItemToAuction(event: APIGatewayProxyEvent): APIGatewayProxyResult {
    if (event.body) {
      const body = JSON.parse(event.body)
      const auctionId = body.auctionId
      const auctionItemId = body.auctionItemId
      const input = new ConnectAuctionItemInputData(auctionId, auctionItemId)
      const auctionOutputdata = this.auctionService.connectAuctionItemToAuction(input)

      return {
        statusCode: 200,
        body: JSON.stringify(auctionOutputdata),
      }
    }
    throw new Error("invalid parameters")
  }
}
