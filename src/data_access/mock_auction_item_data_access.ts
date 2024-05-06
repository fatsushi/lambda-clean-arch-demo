import AuctionItem from "../domain_model/auction_item"
import IAuctionItemDataAccess from "../usecase/i_auction_item_data_access"

export default class MockAuctionItemDataAccess implements IAuctionItemDataAccess {
  constructor(
    public auctionItemId: string,
    public auctionItemName: string,
    public category: string,
  ) {}

  public loadAuctionItem(auctionItemId: string): AuctionItem {
    return new AuctionItem(this.auctionItemId, this.auctionItemName, this.category)
  }

  public saveAuctionItem(auctionItem: AuctionItem): void {}
}
