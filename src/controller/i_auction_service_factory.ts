import IAuctionInputBoundary from "../usecase/i_auction_input_boundary"

export default interface IAuctionServiceFactory {
  create(): IAuctionInputBoundary
}
