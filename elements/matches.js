'use strict';

var _HTMLElement = function() {};
_HTMLElement.prototype = HTMLElement.prototype;

class Matches extends _HTMLElement {

    render() {
        
    }

    createdCallback() {
        this.setAttribute('element-created', '');
    }

    attachedCallback() {
        this.setAttribute('element-attached', '');
    }

    detachedCallback() { }

    attributeChangedCallback() { }

}

document.registerElement('afk-matches', Matches);
