const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    getRoster: async (_, { teamId }, { dataSources }) => {
      const data = await dataSources.MLBAPI.getRoster(teamId);

      const roster = data.roster_40.queryResults.row;

      return roster;
    },

    getHittingLeaders: async (_, __, { dataSources }) => {
      const data = await dataSources.MLBAPI.getHittingLeaders();

      const hittingLeaders =
        data.leader_hitting_repeater.leader_hitting_mux.queryResults.row;

      return hittingLeaders;
    },

    getPitchingLeaders: async (_, __, { dataSources }) => {
      const data = await dataSources.MLBAPI.getPitchingLeaders();

      const pitchingLeaders =
        data.leader_pitching_repeater.leader_pitching_mux.queryResults.row;

      return pitchingLeaders;
    },

    // getPositionStats: async (_, __, { dataSources }) => {
    //   const data = await dataSources.MLBAPI.getPositionStats();

    //   const playerStats = data.sport_hitting_tm.queryResults.row;

    //   return playerStats;
    // },

    getPitcherStats: async (_, { playerId }, { dataSources }) => {
      const data = await dataSources.MLBAPI.getPitcherStats(playerId);

      const pitcherStats = data.sport_pitching_tm.queryResults.row;

      return pitcherStats;
    },

    //   // get a single track by ID, for the track page
    //   track: (_, { id }, { dataSources }) => {
    //     return dataSources.trackAPI.getTrack(id);
    //   },
    // },
    // Track: {
    //   author: ({ authorId }, _, { dataSources }) => {
    //     return dataSources.trackAPI.getAuthor(authorId);
    //   },

    // modules: ({ id }, _, { dataSources }) => {
    //   return dataSources.trackAPI.getTrackModules(id);
    // },
  },
};

module.exports = resolvers;
