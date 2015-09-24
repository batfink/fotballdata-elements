import getJSON from './get.js';
import { log } from './bondage.js';

var url = 'http://api.fotballdata.no/v1';

function getData(category, id, endPoint, clubId) {
    let query = [ url, category, id, endPoint ].join('/');
    query = clubId ? query + '?clubid=' + clubId : query;
    return getJSON(query);
}

function clubs(clubId, endPoint) {
    return getData('clubs', clubId, endPoint);
}

function districts(districtId, endPoint) {
    return getData('districts', districtId, endPoint);
}

function matches(clubId, matchId, endPoint) {
    return getData('matches', matchId, endPoint, clubId);
}

function seasons(seasonId) {
    return getData('seasons', seasonId);
}

function stadiums(clubId, stadiumId, endPoint) {
    return getData('stadiums', stadiumId, endPoint, clubId);
}

function teams(teamId, endPoint) {
    return getData('teams', teamId, endPoint);
}

function tournaments(clubId, tournamentId, endPoint) {
    return getData('tournaments', tournamentId, endPoint, clubId);
}

export { clubs, districts, matches, seasons, stadiums, teams, tournaments };
