import IAuctionDataAccess from "./i_auction_data_access"
import IAuctionItemDataAccess from "./i_auction_item_data_access"
import IAuctionInputBoundary from "./i_auction_input_boundary"
import ConnectAuctionItemInputData from "./connect_auction_item_inputdata"
import AuctionOutputData from "./auction_outputdata"
import Auction from "../domain_model/auction"
import AuctionItem from "../domain_model/auction_item"

export default class AuctionService implements IAuctionInputBoundary {
  constructor(
    private auctionDataAccess: IAuctionDataAccess,
    private auctionItemDataAccess: IAuctionItemDataAccess,
  ) {}

  public connectAuctionItemToAuction(input: ConnectAuctionItemInputData): AuctionOutputData | null {
    //load AuctionItem from repository
    const auctionItem: AuctionItem = this.auctionItemDataAccess.loadAuctionItem(input.auctionItemId)
    //load Auction from repository
    const auction: Auction = this.auctionDataAccess.loadAuction(input.auctionId)
    //connect AuctionItem to Auction
    const updatedAuctionItem = auction.connectAuctionItem(auctionItem)
    //save Auction to repository
    this.auctionDataAccess.saveAuction(auction)
    //save AuctionItem to repository
    this.auctionItemDataAccess.saveAuctionItem(updatedAuctionItem)
    //return AuctionOutputData
    return new AuctionOutputData(auction)
  }
}
