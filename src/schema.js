const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get players names array for the homepage"
    getRoster(teamId: ID!): [PlayerName!]!
    "Query to get the top 5 hitters for the homepage"
    getHittingLeaders: [PositionDetail!]!
    "Query to get the top 5 pitchers for the homepage"
    getPitchingLeaders: [PitcherDetail!]!

    #getPositionStats: PositionDetail

    getPitcherStats(playerId: ID!): PitcherDetail
  }

  type PlayerNameAndId {
    player_id: ID!
    name_display_first_last: String!
  }

  "A Playername holds the players name id and position"
  type PlayerName {
    "player's id"
    player_id: ID!
    "The Players first and last name"
    name_display_first_last: String!
    "The players main position type"
    position_txt: String!
  }

  type PositionDetail {
    name_display_first_last: String!
    #team_name: String
    #team_full: String
    player_id: ID!
    "batting average"
    avg: String!
    "on base percentage"
    obp: String!
    "on base + slugging"
    ops: String!
    "hits"
    h: String!
    "homeruns"
    hr: String!
  }

  type PitcherDetail {
    name_display_first_last: String!
    #team_name: String!
    player_id: ID!
    "earned run average"
    era: String!
    "innings pitched"
    ip: String!
    "strikeouts"
    so: String!
    "walks"
    bb: String!
    "walks and hits per inning pitched"
    whip: String!
  }

  # "Author of a complete Track or a Module"
  # type Author {
  #   id: ID!
  #   "Author's first and last name"
  #   name: String!
  #   "Author's profile picture"
  #   photo: String
  # }

  # "A Module is a single unit of teaching. Multiple Modules compose a Track"
  # type Module {
  #   id: ID!
  #   "The module's title"
  #   title: String!
  #   "The module's length in minutes"
  #   length: Int
  # }
`;

module.exports = typeDefs;
