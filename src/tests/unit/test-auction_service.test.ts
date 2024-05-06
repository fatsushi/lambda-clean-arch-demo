import { expect, describe, it } from "@jest/globals"
import AuctionService from "../../usecase/auction_service"
//import AuctionItem from "../../domain_model/auction_item"
import MockAuctionDataAccess from "../../data_access/mock_auction_data_access"
import MockAuctionItemDataAccess from "../../data_access/mock_auction_item_data_access"
import ConnectAuctionItemInputData from "../../usecase/connect_auction_item_inputdata"

describe("Unit test for Auction Domain Models", function () {
  it("ActionItemとAuctionを紐付けできること", () => {
    const auctionId: string = "auctionId001"
    const auctionName: string = "auction01"
    const auctionItemId: string = "auctionItemId01"
    const auctionItemId2: string = "auctionItemId02"
    const auctionItemName2: string = "auctionItem02"
    const category2: string = "Category02"

    const auctionItemIdList: string[] = [auctionItemId]

    const mockAuctionDataAccess = new MockAuctionDataAccess(
      auctionId,
      auctionName,
      auctionItemIdList,
    )
    const mockAuctionItemDataAccess = new MockAuctionItemDataAccess(
      auctionItemId2,
      auctionItemName2,
      category2,
    )

    const target = new AuctionService(mockAuctionDataAccess, mockAuctionItemDataAccess)
    const input = new ConnectAuctionItemInputData(auctionId, auctionItemId2)
    const output = target.connectAuctionItemToAuction(input)

    expect(output).not.toBeNull()
    expect(output?.auctionId).toEqual(auctionId)
    expect(output?.auctionName).toEqual(auctionName)
    expect(output?.auctionItemIdList.length).toEqual(2)
    expect(output?.auctionItemIdList[0]).toEqual(auctionItemId)
    expect(output?.auctionItemIdList[1]).toEqual(auctionItemId2)
  })
})
