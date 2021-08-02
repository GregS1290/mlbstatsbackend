const { RESTDataSource } = require('apollo-datasource-rest');

class MLBAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = 'http://lookup-service-prod.mlb.com/';
  }

  //test my get roster route
  getRoster(teamId) {
    return this.get(`json/named.roster_40.bam?team_id=${teamId}`);
  }

  getHittingLeaders() {
    return this.get(
      `json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2021'&sort_column='avg'&leader_hitting_repeater`
    );
  }

  getPitchingLeaders() {
    return this.get(
      `json/named.leader_pitching_repeater.bam?sport_code='mlb'&results=5&game_type='R'&season='2021'&sort_column='era'&leader_pitching_repeater`
    );
  }

  getPitcherStats(playerId) {
    return this.get(
      `json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id=${playerId}`
    );
  }

  // getPositionStats() {
  //   return this.get(
  //     `json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id=519203`
  //   );
  // }

  // getTrack(trackId) {
  //   return this.get(`track/${trackId}`);
  // }

  // getTrackModules(trackId) {
  //   return this.get(`track/${trackId}/modules`);
  // }
}

module.exports = MLBAPI;
