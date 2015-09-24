import { log } from '../lib/bondage.js';
import getJSON from '../lib/get.js';
import { clubs, districts, matches, seasons, stadiums, tournaments, teams } from '../lib/fotballdata.js';

export default (function api() {
    // Clubs

    clubs('1681').then(console.log.bind(console, 'clubs:'));
    clubs('1681', 'matches').then(console.log.bind(console, 'clubs/matches:'));
    clubs('1681', 'tournaments').then(console.log.bind(console, 'clubs/tournaments:'));
    clubs('1681', 'teams').then(console.log.bind(console, 'clubs/teams:'));



    // Districts

    districts().then(console.log.bind(console, 'districts:'));
    clubs('1681').then( data => districts(data.DistrictId) ).then(console.log.bind(console, 'districts/10:'));
    clubs('1681').then( data => districts(data.DistrictId, 'clubs') ).then(console.log.bind(console, 'districts/10/clubs:'));
    clubs('1681').then( data => districts(data.DistrictId, 'tournaments') ).then(console.log.bind(console, 'districts/10/tournaments:'));
    clubs('1681').then( data => districts(data.DistrictId, 'stadiums') ).then(console.log.bind(console, 'districts/10/stadiums:'));



    // Matches

    clubs('1681', 'matches').then( data => matches('1681', data.Matches.pop().MatchId) )
        .then(console.log.bind(console, 'matches:'));

    clubs('1681', 'matches')
        .then( data => matches('1681', data.Matches.pop().MatchId, 'people') )
        .then(console.log.bind(console, 'matches/people:'));



    // Seasons

    seasons().then(console.log.bind(console, 'all seasons:'));
    seasons().then( data => seasons( data.pop().SeasonId ) ).then(console.log.bind(console, 'last season:'));


    // stadiums

    clubs('1681')
        .then( data => districts(data.DistrictId, 'stadiums') ) // get stadiums in the clubs district
        .then( data => {
            data.LocalStadiums = data.Stadiums.filter( stadium => stadium.StadiumName.match(/Bergheim|Kleppestø/));
            return data;
        })
        .then(console.log.bind(console, 'districts/10/stadiums (local stadiums):'));


    /* Gir ikke noe mer informasjon enn districts/10/stadiums/{stadiumId} */

    clubs('1681')
        .then( data => districts(data.DistrictId, 'stadiums')) // get stadiums in the clubs district
        .then( data => data.Stadiums.filter( stadium => stadium.StadiumName.match(/Kleppestø kunstgress/))[0]) // get one stadium
        .then( data => stadiums( '1681', data.StadiumId )) // same info as over
        .then(console.log.bind(console, 'stadium:'));

    clubs('1681')
        .then( data => districts(data.DistrictId, 'stadiums')) // get stadiums in the clubs district
        .then( data => data.Stadiums.filter( stadium => stadium.StadiumName.match(/Kleppestø kunstgress/))[0]) // get one stadium
        .then( data => stadiums( '1681', data.StadiumId, 'matches' ))
        .then(console.log.bind(console, 'Kamper på en stadion:'));



    // Tournaments

    clubs('1681', 'tournaments')
        .then( data => data.Tournaments[0].TournamentId )
        .then( tournamentId => tournaments('1681', tournamentId) )
        .then( console.log.bind(console, 'En tournament:'));

    clubs('1681', 'tournaments')
        .then( data => data.Tournaments[0].TournamentId )
        .then( tournamentId => tournaments('1681', tournamentId, 'tables') )
        .then( console.log.bind(console, 'tournament/tables:'));

    clubs('1681', 'tournaments')
        .then( data => data.Tournaments[0].TournamentId )
        .then( tournamentId => tournaments('1681', tournamentId, 'matches') )
        .then( console.log.bind(console, 'tournament/matches:'));

    clubs('1681', 'tournaments')
        .then( data => data.Tournaments.pop().TournamentId )
        .then( tournamentId => tournaments('1681', tournamentId, 'teams') )
        .then( console.log.bind(console, 'tournament/teams:'));


    // Teams

    clubs('1681', 'teams').then( data => teams(data.Teams.pop().TeamId) ).then(console.log.bind(console, 'teams:'));
    clubs('1681', 'teams').then( data => teams(data.Teams.pop().TeamId, 'tournaments') ).then(console.log.bind(console, 'teams/tournaments:'));
    clubs('1681', 'teams').then( data => teams(data.Teams.pop().TeamId, 'players') ).then(console.log.bind(console, 'teams/players:'));
    clubs('1681', 'teams').then( data => teams(data.Teams.pop().TeamId, 'tables') ).then(console.log.bind(console, 'teams/tables:'));
    clubs('1681', 'teams').then( data => teams(data.Teams.pop().TeamId, 'matches') ).then(console.log.bind(console, 'teams/matches:'));

})();
