import Auction from "../domain_model/auction"

export default class AuctionOutputData {
  public auctionId: string = ""
  public auctionName: string = ""
  public auctionItemIdList: string[] = []

  constructor(auction: Auction) {
    this.auctionId = auction.getAuctionId()
    this.auctionName = auction.getAuctionName()
    for (const itemId of auction.getAuctionItemIdList()) {
      this.auctionItemIdList.push(itemId)
    }
  }
}
