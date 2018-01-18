"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }return arr2;
    } else {
        return Array.from(arr);
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

//App parent
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);

        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        } //for erasing all the options

    }, {
        key: "handlePick",
        value: function handlePick() {
            var index = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[index];
            alert(option);
        } //To randomly pick one item from the array

    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) >= 0) {
                return "Enter new values";
            }
            this.setState(function (previousState) {
                return {
                    options: [].concat(_toConsumableArray(previousState.options), [option])

                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var subtitle = "Put your life in the hands of a computer";

            return React.createElement("div", null, React.createElement(Header, { subtitle: subtitle }), React.createElement(Action, {
                hasOptions: this.state.options.length > 0,
                handlePick: this.handlePick
            }), React.createElement(Options, {
                options: this.state.options,
                handleDeleteOptions: this.handleDeleteOptions
            }), React.createElement(AddOption, {
                handleAddOption: this.handleAddOption
            }));
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

//Header react component
var Header = function Header(props) {
    return React.createElement("div", null, React.createElement("h1", null, props.title), props.subtitle ? React.createElement("h2", null, props.subtitle) : "");
};

Header.defaultProps = {
    title: "Indecisive"
};

//Random selector react component //what should I do
var Action = function Action(props) {
    return React.createElement("div", null, React.createElement("button", {
        disabled: !props.hasOptions,
        onClick: props.handlePick
    }, "What Should I do?"));
};

//Options React component
var Options = function Options(props) {
    return React.createElement("div", null, React.createElement("button", { onClick: props.handleDeleteOptions }, "Remove All"), props.options.map(function (option) {
        return React.createElement(Option, { key: option, optionText: option });
    }));
};

//option react component
var Option = function Option(props) {
    return React.createElement("div", null, props.optionText);
};

//AddOption React component

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.optionInput.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return {
                    error: error
                };
            });

            e.target.elements.optionInput.value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", { onSubmit: this.handleAddOption }, React.createElement("input", { type: "text", name: "optionInput" }), React.createElement("button", null, "Add Option")));
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
//# sourceMappingURL=counter-example.js.map