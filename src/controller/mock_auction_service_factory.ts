import IAuctionInputBoundary from "../usecase/i_auction_input_boundary"
import IAuctionServiceFactory from "./i_auction_service_factory"
import AuctionService from "../usecase/auction_service"
import MockAuctionDataAccess from "../data_access/mock_auction_data_access"
import MockAuctionItemDataAccess from "../data_access/mock_auction_item_data_access"

export default class MockAuctionServiceFactory implements IAuctionServiceFactory {
  public create(): IAuctionInputBoundary {
    const auctionId = "auctionId01"
    const auctionName = "auctionName01"
    const auctionItemIdList: string[] = []
    const auctionDataAccess = new MockAuctionDataAccess(auctionId, auctionName, auctionItemIdList)

    const auctionItemId = "auctionItemId01"
    const auctionItemName = "auctionItemName01"
    const category = "category01"

    const auctionItemDataAccess = new MockAuctionItemDataAccess(
      auctionItemId,
      auctionItemName,
      category,
    )

    return new AuctionService(auctionDataAccess, auctionItemDataAccess)
  }
}
