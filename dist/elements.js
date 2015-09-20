(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', '../lib/test.js'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports, require('../lib/test.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.test);
        global.testElement = mod.exports;
    }
})(this, function (exports, _libTestJs) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var _test = _interopRequireDefault(_libTestJs);

    var _HTMLElement = function _HTMLElement() {};
    _HTMLElement.prototype = HTMLElement.prototype;

    var TestElement = (function (_HTMLElement2) {
        _inherits(TestElement, _HTMLElement2);

        function TestElement() {
            _classCallCheck(this, TestElement);

            _get(Object.getPrototypeOf(TestElement.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(TestElement, [{
            key: 'createdCallback',
            value: function createdCallback() {
                this.setAttribute('element-created', '');
                // console.log('foo');
                // log('created');
                console.log('test2:', _test['default']);
                // test();
            }
        }, {
            key: 'attachedCallback',
            value: function attachedCallback() {
                this.setAttribute('element-attached', '');
            }
        }, {
            key: 'detachedCallback',
            value: function detachedCallback() {}
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback() {}
        }]);

        return TestElement;
    })(_HTMLElement);

    document.registerElement('test-element', TestElement);
});
//# sourceMappingURL=elements.js.map