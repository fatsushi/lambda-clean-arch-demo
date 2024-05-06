import AuctionItem from "../domain_model/auction_item"

export default interface IAuctionItemDataAccess {
  loadAuctionItem(auctionItemId: string): AuctionItem
  saveAuctionItem(auctionItem: AuctionItem): void
}
