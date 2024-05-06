import AuctionItem from "./auction_item"

export default class Auction {
  private auctionItemIdList: string[] = []

  constructor(private auctionId: string, private auctionName: string, itemIdList: string[] = []) {
    for (const itemId of itemIdList) {
      this.auctionItemIdList.push(itemId)
    }
  }

  public getAuctionId(): string {
    return this.auctionId
  }

  public getAuctionName(): string {
    return this.auctionName
  }

  public connectAuctionItem(auctionItem: AuctionItem): AuctionItem {
    this.auctionItemIdList.push(auctionItem.getAuctionItemId())
    auctionItem.setAuctionId(this.auctionId)
    return auctionItem
  }

  public getAuctionItemIdList(): string[] {
    //return copy list
    return [...this.auctionItemIdList]
  }
}
