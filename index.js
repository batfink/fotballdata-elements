import test from './lib/test.js';
import { log } from './lib/bondage.js';

var _HTMLElement = function() {};
_HTMLElement.prototype = HTMLElement.prototype;

class TestElement extends _HTMLElement {

    createdCallback() {
        this.setAttribute('element-created', '');
        // console.log('foo');
        log('test', test);
        test();
    }

    attachedCallback() {
        this.setAttribute('element-attached', '');
    }

    detachedCallback() { }

    attributeChangedCallback() { }

}

document.registerElement('test-element', TestElement);
