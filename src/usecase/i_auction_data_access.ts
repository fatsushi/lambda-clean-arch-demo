import Auction from "../domain_model/auction"

export default interface IAuctionDataAccess {
  loadAuction(auctionId: string): Auction
  saveAuction(auction: Auction): void
}
