import Auction from "../domain_model/auction"
import IAuctionDataAccess from "../usecase/i_auction_data_access"

export default class MockAuctionDataAccess implements IAuctionDataAccess {
  constructor(
    public auctionId: string,
    public auctionName: string,
    public auctionItemIdList: string[],
  ) {}

  public loadAuction(auctionId: string): Auction {
    return new Auction(this.auctionId, this.auctionName, this.auctionItemIdList)
  }

  public saveAuction(auction: Auction): void {}
}
