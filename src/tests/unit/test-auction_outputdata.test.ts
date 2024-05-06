import { expect, describe, it } from "@jest/globals"
import AuctionOutputData from "../../usecase/auction_outputdata"
import Auction from "../../domain_model/auction"

describe("Unit test for Auction Domain Models", function () {
  it("コンストラクタで与えられた値でAuctionOutputDataのインスタンスが作成できること", () => {
    const auctionId: string = "id00001"
    const auctionName: string = "auction01"

    const auction = new Auction(auctionId, auctionName)
    const target = new AuctionOutputData(auction)

    expect(target.auctionId).toEqual(auctionId)
    expect(target.auctionName).toEqual(auctionName)
    expect(target.auctionItemIdList.length).toEqual(0)
  })

  it("AuctionItemOutputDataが1つ追加できること", () => {
    const auctionId: string = "id00001"
    const auctionName: string = "auction01"
    const auctionItemId: string = "itemId00001"
    const auction = new Auction(auctionId, auctionName)
    const target = new AuctionOutputData(auction)
    target.auctionItemIdList.push(auctionItemId)

    expect(target.auctionItemIdList.length).toEqual(1)
    expect(target.auctionItemIdList[0]).toEqual(auctionItemId)
    expect(target.auctionId).toEqual(auctionId)
    expect(target.auctionName).toEqual(auctionName)
  })

  it("AuctionOutputDataがJSONに変換できること", () => {
    const auctionId: string = "id00001"
    const auctionName: string = "auction01"
    const auctionItemId: string = "itemId00001"

    const auction = new Auction(auctionId, auctionName)
    const target = new AuctionOutputData(auction)
    target.auctionItemIdList.push(auctionItemId)

    expect(JSON.stringify(target)).toEqual(
      '{"auctionId":"id00001","auctionName":"auction01","auctionItemIdList":["itemId00001"]}',
    )
  })
})
