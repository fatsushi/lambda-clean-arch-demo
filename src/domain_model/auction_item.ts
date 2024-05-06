export default class AuctionItem {
  private auctionId: string = '';

  constructor(
    private auctionItemId: string,
    private auctionItemName: string,
    private category: string,
  ) {}

  public setAuctionId(auctionId: string) {
    this.auctionId = auctionId;
  }

  public getAuctionId() {
    return this.auctionId;
  }

  public getAuctionItemId() {
    return this.auctionItemId;
  }
  public getAuctionItemName() {
    return this.auctionItemName;
  }
  public getCategory() {
    return this.category;
  }
}
