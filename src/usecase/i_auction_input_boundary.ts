import ConnectAuctionItemInputData from "./connect_auction_item_inputdata"
import AuctionOutputData from "./auction_outputdata"

export default interface IAuctionInputBoundary {
  connectAuctionItemToAuction(
    connectAuctionItem: ConnectAuctionItemInputData,
  ): AuctionOutputData | null
}
