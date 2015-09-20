var _HTMLElement = function() {};
_HTMLElement.prototype = HTMLElement.prototype;

class TestElement extends _HTMLElement {

    createdCallback() {
        this.setAttribute('element-created', '');
        // console.log('foo');
        // log('created');
        var p = tag('p');

    }

    attachedCallback() {
        this.setAttribute('element-attached', '');
    }

    detachedCallback() { }

    attributeChangedCallback() { }

}

document.registerElement('test-element', TestElement);
