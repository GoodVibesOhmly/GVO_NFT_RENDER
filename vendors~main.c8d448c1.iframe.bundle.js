/*! For license information please see vendors~main.c8d448c1.iframe.bundle.js.LICENSE.txt */
  fragment AskPrice on Ask {
    id
    currency {
      ...CurrencyShort
    }
    amount
    createdAtTimestamp
  }

  fragment NFTMedia on Media {
    id
    creatorBidShare
    owner {
      id
    }
    creator {
      id
    }
    currentAsk {
      ...AskPrice
    }
    createdAtTimestamp
    metadataURI
    metadataHash
    contentURI
    contentHash
  }
`,AUCTION_PARTIALS=graphql_request_1.gql`
  fragment CurrencyShort on Currency {
    id
    name
    symbol
    decimals
  }

  fragment PreviousReserveBid on InactiveReserveAuctionBid {
    id
    bidder {
      id
    }
    transactionHash
    createdAtTimestamp
    amount
    bidType
    bidInactivatedAtTimestamp
    bidInactivatedAtBlockNumber
  }

  fragment CurrentReserveBid on ReserveAuctionBid {
    bidType
    amount
    transactionHash
    createdAtTimestamp
    bidder {
      id
    }
  }

  fragment ReserveAuctionPartial on ReserveAuction {
    id
    tokenId
    tokenContract
    transactionHash
    status
    approved
    reservePrice
    firstBidTime
    token
    createdAtTimestamp
    approvedTimestamp
    curator {
      id
    }
    curatorFeePercentage
    tokenOwner {
      id
    }
    auctionCurrency {
      ...CurrencyShort
    }
    currentBid {
      ...CurrentReserveBid
    }
    previousBids {
      ...PreviousReserveBid
    }
    duration
    expectedEndTimestamp
    finalizedAtTimestamp
  }
`;exports.GET_AUCTION_BY_CURATOR=graphql_request_1.gql`
  ${AUCTION_PARTIALS}
  ${MEDIA_PARTIALS}

  fragment ReserveAuctionPartialWithMedia on ReserveAuction {
    ...ReserveAuctionPartial
    media {
      ...NFTMedia
    }
  }

  query getAuctionsByCurator(
    $curators: [String!]
    $approved: [Boolean!]
    $first: Int
    $skip: Int
  ) {
    reserveAuctions(
      where: { curator_in: $curators, approved_in: $approved }
      first: $first
      skip: $skip
      orderBy: createdAtTimestamp
      orderDirection: desc
    ) {
      ...ReserveAuctionPartialWithMedia
    }
  }
`,exports.GET_ALL_AUCTIONS=graphql_request_1.gql`
  ${AUCTION_PARTIALS}

  query getAllAuctions($approved: [Boolean!], $first: Int, $skip: Int) {
    reserveAuctions(where: { approved_in: $approved }, first: $first, skip: $skip) {
      ...ReserveAuctionPartial
    }
  }
`,exports.GET_AUCTION_BY_MEDIA=graphql_request_1.gql`
  ${AUCTION_PARTIALS}

  query getAuctionByMedia($tokens: [String!]) {
    reserveAuctions(
      first: 300
      where: { token_in: $tokens }
      orderBy: createdAtTimestamp
      orderDirection: desc
    ) {
      ...ReserveAuctionPartial
    }
  }
`,exports.GET_MEDIAS_QUERY=graphql_request_1.gql`
  ${AUCTION_PARTIALS}
  ${MEDIA_PARTIALS}

  fragment BidDataPartial on Bid {
    id
    bidder {
      id
    }
    createdAtTimestamp
    transactionHash
    amount
    currency {
      ...CurrencyShort
    }
  }

  fragment TransferPartial on Transfer {
    id
    transactionHash
    from {
      id
    }
    to {
      id
    }
    createdAtTimestamp
    createdAtBlockNumber
  }

  fragment NFTMediaFullData on Media {
    ...NFTMedia
    currentBids {
      ...BidDataPartial
    }
    transfers {
      ...TransferPartial
    }
    reserveAuctions(orderBy: createdAtTimestamp, orderDirection: desc, first: 1) {
      ...ReserveAuctionPartial
    }
  }

  query getMediaAndAuctions(
    $id_ids: [ID!]
    $creator_ids: [String!]
    $owner_ids: [String!]
  ) {
    id: medias(
      where: { id_in: $id_ids }
      first: 500
    ) {
      ...NFTMediaFullData
    }
    creator: medias(
      where: { creator_in: $creator_ids }
      first: 500
    ) {
      ...NFTMediaFullData
    }
    owner: medias(
      where: { owner_in: $owner_ids }
      first: 500
    ) {
      ...NFTMediaFullData
    }
  }
`},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GET_TOKEN_VALUES_QUERY=void 0;const graphql_request_1=__webpack_require__(377);exports.GET_TOKEN_VALUES_QUERY=graphql_request_1.gql`
  fragment TokenShort on Token {
    id
    symbol
    name
    decimals
    derivedETH
  }
  query getTokenPrices($currencyContracts: [ID!]) {
    bundle(id: "1") {
      ethPrice
    }
    tokens(where: { id_in: $currencyContracts }) {
      ...TokenShort
    }
  }
//# sourceMappingURL=vendors~main.c8d448c1.iframe.bundle.js.map