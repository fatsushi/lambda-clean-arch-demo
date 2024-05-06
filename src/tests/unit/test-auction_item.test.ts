import { expect, describe, it } from "@jest/globals"
import AuctionItem from "../../domain_model/auction_item"

describe("Unit test for Auction Domain Models", function () {
  it("コンストラクタで与えられた値でAuctionItemのインスタンスが作成できること", () => {
    const auctionItemId: string = "id00001"
    const auctionItemName: string = "auctionItem01"
    const category: string = "Category01"

    const target = new AuctionItem(auctionItemId, auctionItemName, category)

    expect(target.getAuctionItemId()).toEqual(auctionItemId)
    expect(target.getAuctionItemName()).toEqual(auctionItemName)
    expect(target.getCategory()).toEqual(category)
  })

  it("設定したAuctionIdが取得できること", () => {
    const auctionItemId: string = "id00001"
    const auctionItemName: string = "auctionItem01"
    const category: string = "Category01"
    const auctionId = "auctionId01"

    const target = new AuctionItem(auctionItemId, auctionItemName, category)
    target.setAuctionId(auctionId)

    expect(target.getAuctionId()).toEqual(auctionId)
  })
})
