import test from './lib/test.js';
import { log } from './lib/bondage.js';
// import inspectApi from './js/api.js';
import { formateDate, subtractTwoHours } from './lib/date.js';
import { clubs, matches, teams } from './lib/fotballdata.js';


var _HTMLElement = function() {};
_HTMLElement.prototype = HTMLElement.prototype;

class TestElement extends _HTMLElement {

    createdCallback() {
        this.setAttribute('element-created', '');

        this.clubId = this.getAttribute('club-id');

        // Test på datoformattering
        // Må trekke fra to timer siden serveren står i Irland
        clubs('1681', 'matches')
            .then( data => data.Matches.filter( match => match.MatchNumber === '12112014005' )[0].MatchStartDate )
            .then( data => Number(data.match(/[0-9]+/)[0]) )
            .then( subtractTwoHours )
            .then( formateDate )
            .then(console.log.bind(console, 'match start date (	tirsdag 28.04.2015 kl. 17:15 ):'));

        teams('32401', 'matches').then(log);

    }

    attachedCallback() {
        this.setAttribute('element-attached', '');
    }

    detachedCallback() { }

    attributeChangedCallback() { }

}

document.registerElement('test-element', TestElement);
