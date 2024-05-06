import { expect, describe, it } from "@jest/globals"
import ConnectAuctionItemInputData from "../../usecase/connect_auction_item_inputdata"

describe("Unit test for Auction Domain Models", function () {
  it("コンストラクタで与えられた値でAuctionItemInputDataのインスタンスが作成できること", () => {
    const auctionId: string = "auctionId01"
    const auctionItemId: string = "auctionItemId001"

    const target = new ConnectAuctionItemInputData(auctionId, auctionItemId)

    expect(target.auctionId).toEqual(auctionId)
    expect(target.auctionItemId).toEqual(auctionItemId)
  })
})
