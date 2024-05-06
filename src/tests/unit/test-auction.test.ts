import { expect, describe, it } from "@jest/globals"
import Auction from "../../domain_model/auction"
import AuctionItem from "../../domain_model/auction_item"

describe("Unit test for Auction Domain Models", function () {
  it("コンストラクタで与えられた値でAuctionのインスタンスが作成できること", () => {
    const auctionId: string = "id00001"
    const auctionName: string = "auction01"

    const target = new Auction(auctionId, auctionName)

    expect(target.getAuctionId()).toEqual(auctionId)
    expect(target.getAuctionName()).toEqual(auctionName)
  })

  it("コンストラクタで与えられたItemIdのリストでAuctionのインスタンスが作成できること", () => {
    const auctionId: string = "id00001"
    const auctionName: string = "auction01"
    const itemIdList: string[] = ["item01", "item02"]

    const target = new Auction(auctionId, auctionName, itemIdList)

    expect(target.getAuctionId()).toEqual(auctionId)
    expect(target.getAuctionName()).toEqual(auctionName)
    expect(target.getAuctionItemIdList().length).toEqual(2)
    expect(target.getAuctionItemIdList()[0]).toEqual("item01")
  })

  it("AuctionItemがAuctionと紐付けできること", () => {
    const auctionId: string = "id00001"
    const auctionName: string = "auction01"
    const auctionItemId = "auctionItem01"
    const auctionItemName = "auctionItem01"
    const category = "category01"

    const target = new Auction(auctionId, auctionName)
    const auctionItem = new AuctionItem(auctionItemId, auctionItemName, category)
    const returnitem = target.connectAuctionItem(auctionItem)

    expect(target.getAuctionItemIdList().length).toEqual(1)
    expect(target.getAuctionItemIdList()[0]).toEqual(auctionItemId)
    expect(returnitem.getAuctionId()).toEqual(auctionId)
  })

  it("AuctionItemが複数紐付けできること", () => {
    const auctionId: string = "id00001"
    const auctionName: string = "auction01"
    const auctionItemId = "auctionItem01"
    const auctionItemName = "auctionItem01"
    const category = "category01"
    const auctionItemId2 = "auctionItem02"
    const auctionItemName2 = "auctionItem02"
    const category2 = "category02"

    const target = new Auction(auctionId, auctionName)
    const auctionItem = new AuctionItem(auctionItemId, auctionItemName, category)
    const auctionItem2 = new AuctionItem(auctionItemId2, auctionItemName2, category2)

    target.connectAuctionItem(auctionItem)
    target.connectAuctionItem(auctionItem2)

    expect(target.getAuctionItemIdList().length).toEqual(2)
    expect(target.getAuctionItemIdList()[0]).toEqual(auctionItemId)
    expect(target.getAuctionItemIdList()[1]).toEqual(auctionItemId2)
  })

  it("AuctionItemは外部から変更できないこと", () => {
    const auctionId: string = "id00001"
    const auctionName: string = "auction01"
    const auctionItemId = "auctionItem01"
    const auctionItemName = "auctionItem01"
    const category = "category01"

    const target = new Auction(auctionId, auctionName)
    const auctionItem = new AuctionItem(auctionItemId, auctionItemName, category)
    target.connectAuctionItem(auctionItem)

    var itemIds = target.getAuctionItemIdList()
    itemIds[0] = "auctionItem02"
    itemIds.push("auctionItem03")

    expect(target.getAuctionItemIdList().length).toEqual(1)
    expect(target.getAuctionItemIdList()[0]).toEqual(auctionItemId)
  })
})
