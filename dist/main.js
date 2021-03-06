(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Constants", function() { return /* reexport */ Constants_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "IFrameManager", function() { return /* reexport */ src_IFrameManager; });

// NAMESPACE OBJECT: ./src/Constants.js
var Constants_namespaceObject = {};
__webpack_require__.r(Constants_namespaceObject);
__webpack_require__.d(Constants_namespaceObject, "VERSION", function() { return VERSION; });
__webpack_require__.d(Constants_namespaceObject, "messageType", function() { return messageType; });
__webpack_require__.d(Constants_namespaceObject, "errorType", function() { return errorType; });

// CONCATENATED MODULE: ./src/Constants.js
"use es6";

var VERSION = "0.0.1";
var messageTypeList = ["CALL_ANSWERED", "CALL_COMPLETED", "CALL_DATA", "CALL_ENDED", "DIAL_NUMBER", "ENGAGEMENT_CREATED", "END_CALL", "ERROR", "INCOMING_CALL", "INITIALIZED", "LOGGED_IN", "LOGGED_OUT", "OUTGOING_CALL_STARTED", "READY", "RESIZE_WIDGET", "SET_CALL_STATE", "SET_WIDGET_URL", "SYNC", "SYNC_ACK", "SYNC_ACK_FAILED", "UNLOADING", "VISIBILITY_CHANGED"];
var errorTypeList = ["UNKNOWN_MESSAGE_TYPE", "GENERIC"];

function mirrorKeys(keyList) {
  var keyObject = {};
  keyList.forEach(function (keyName) {
    keyObject[keyName] = keyName;
  });
  return keyObject;
}

var messageType = mirrorKeys(messageTypeList);
var errorType = mirrorKeys(errorTypeList);
// CONCATENATED MODULE: ./src/IFrameManager.js
"use es6";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/*
 * IFrameManager abstracts the iFrame communication between the IFrameHost and an IFrame
 * An IFrameManager instance can act as part of the IFrameHost and an IFrame depending on
 * the options.
 */

var IFrameManager_IFrameManager = /*#__PURE__*/function () {
  function IFrameManager(options) {
    var _this = this;

    _classCallCheck(this, IFrameManager);

    this.options = options;
    var iFrameOptions = options.iFrameOptions,
        onMessageHandler = options.onMessageHandler,
        debugMode = options.debugMode;
    this.onMessageHandler = onMessageHandler;

    if (!this.onMessageHandler) {
      throw new Error("Invalid options: onMessageHandler is not defined");
    }

    this.isIFrameHost = !!iFrameOptions;
    this.debugMode = debugMode; // Keeps track of all the callbacks

    this.callbacks = {};
    this.instanceId = Date.now();
    this.instanceRegexp = new RegExp("^".concat(this.instanceId));
    this.isReady = false;

    this.messageHandler = function (event) {
      return _this.onMessage(event);
    };

    window.addEventListener("message", this.messageHandler);

    if (iFrameOptions) {
      this.iFrame = IFrameManager.createIFrame(iFrameOptions, function () {
        _this.firstSyncSent = Date.now();
        _this.isReady = false;

        _this.sendSync();
      });
    }

    this.destinationWindow = iFrameOptions ? this.iFrame.contentWindow : window.parent;
    this.destinationHost = IFrameManager.getDestinationHost(iFrameOptions);
  }
  /*
   * Creates a new message id
   */


  _createClass(IFrameManager, [{
    key: "handleLoadError",
    value: function handleLoadError() {
      this.onMessageHandler({
        type: messageType.SYNC_ACK_FAILED
      });
    }
  }, {
    key: "updateIFrameSize",
    value: function updateIFrameSize(sizeInfo) {
      var width = sizeInfo.width,
          height = sizeInfo.height;

      var formatSize = function formatSize(size) {
        return typeof size === "number" ? "".concat(size, "px") : size;
      };

      if (width) {
        this.iFrame.setAttribute("width", formatSize(width));
      }

      if (height) {
        this.iFrame.setAttribute("height", formatSize(height));
      }
    }
  }, {
    key: "onReady",
    value: function onReady() {
      this.isReady = true;
      this.onMessageHandler({
        type: messageType.READY
      });
    }
    /*
     * Unload the iFrame
     */

  }, {
    key: "remove",
    value: function remove() {
      window.removeEventListener("message", this.messageHandler);

      if (this.iFrame) {
        var element = IFrameManager.getHostElement(this.options.iFrameOptions.hostElementSelector);
        element.innerHTML = "";
        this.isReady = false;
        this.iFrame = null;
        this.options = null;
      }
    }
    /*
     * Send a message to the destination window.
     */

  }, {
    key: "sendMessage",
    value: function sendMessage(message, callback) {
      var type = message.type;

      if (type !== messageType.SYNC && !this.isReady) {
        // Do not send a message unless the iFrame is ready to receive.
        console.warn("iFrame not initialized to send a message", message);
        return;
      }

      var messageId = message.messageId;

      if (!messageId) {
        // Initiating a new message
        messageId = IFrameManager.createMessageId(this.instanceId);

        if (callback) {
          // Keep track of the callback
          this.callbacks[messageId] = callback;
        }
      }

      var newMessage = Object.assign({}, message, {
        messageId: messageId
      });
      this.logDebugMessage("postMessage", type, message);
      this.destinationWindow.postMessage(newMessage, this.destinationHost);
    }
  }, {
    key: "onMessage",
    value: function onMessage(event) {
      var data = event.data,
          origin = event.origin;
      var type = event.data.type;

      if (type === messageType.SYNC) {
        // The iFrame host can send this message multiple times, don't respond more than once
        if (!this.isReady) {
          this.isReady = true;
          var message = Object.assign({}, event.data, {
            type: messageType.SYNC_ACK,
            debugMode: this.debugMode,
            version: VERSION,
            iFrameUrl: IFrameManager.extractHostFromUrl(window.location.href)
          });
          var hostUrl = event.data.hostUrl;
          this.destinationHost = hostUrl || this.destinationHost;
          this.sendMessage(message);
          this.onReady();
        }

        return;
      }

      if (this.destinationHost !== origin) {
        // Ignore messages from an unknown origin
        return;
      }

      if (type === messageType.SET_WIDGET_URL) {
        var iFrameUrl = data.iFrameUrl;
        this.destinationHost = iFrameUrl || this.destinationHost;
        return;
      }

      var messageId = data.messageId;

      if (!messageId || !type) {
        return;
      }

      this.logDebugMessage("onMessage", type, {
        data: data
      });

      if (this.instanceRegexp.test(messageId)) {
        // This is a response to some message generated by HubSpot
        var callBack = this.callbacks[messageId];

        if (callBack) {
          callBack(data);
          delete this.callbacks[messageId];
        }

        return;
      } // This is a new message, let the handler handle it.


      this.onMessageHandler(data);
    }
  }, {
    key: "sendSync",
    value: function sendSync() {
      var _this2 = this;

      // No SYNC_ACK message after 30sec results in a failure
      if (Date.now() - this.firstSyncSent > 30000) {
        this.onMessageHandler({
          type: messageType.SYNC_ACK_FAILED
        });
        return;
      }

      this.sendMessage({
        type: messageType.SYNC,
        hostUrl: IFrameManager.extractHostFromUrl(window.location.href)
      }, function (eventData) {
        var iFrameUrl = eventData.iFrameUrl;
        _this2.destinationHost = iFrameUrl || _this2.destinationHost;

        _this2.onReady();

        _this2.debugMode = eventData && eventData.debugMode;
      }); // In cases where the call widget loads the calling extensions asynchronously, message
      // handlers may not be set up - retry until a response from the iFrame

      window.setTimeout(function () {
        if (_this2.iFrame && !_this2.isReady) {
          _this2.sendSync();
        }
      }, 100);
    }
  }, {
    key: "logDebugMessage",
    value: function logDebugMessage() {
      if (this.debugMode) {
        var msg = this.isIFrameHost ? "IFrame host" : "IFrame";

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        args.unshift(msg);
        console.log.call(null, args);
      }
    }
  }], [{
    key: "createMessageId",
    value: function createMessageId(instanceId) {
      return "".concat(instanceId, "_").concat(Date.now());
    }
    /*
     * Gets the html element that hosts the iFrame
     */

  }, {
    key: "getHostElement",
    value: function getHostElement(hostElementSelector) {
      var hostElement = document.querySelector(hostElementSelector);

      if (!hostElement) {
        throw new Error("hostElement not found. Selector - ".concat(hostElementSelector));
      }

      return hostElement;
    }
  }, {
    key: "extractHostFromUrl",
    value: function extractHostFromUrl(url) {
      var a = document.createElement("a");
      a.href = url;
      return "".concat(a.protocol, "//").concat(a.host);
    }
  }, {
    key: "getDestinationHost",
    value: function getDestinationHost(iFrameOptions) {
      var url = iFrameOptions ? iFrameOptions.src : document.referrer;
      return IFrameManager.extractHostFromUrl(url);
    }
  }, {
    key: "createIFrame",
    value: function createIFrame(iFrameOptions, onLoadCallback) {
      var src = iFrameOptions.src,
          width = iFrameOptions.width,
          height = iFrameOptions.height,
          hostElementSelector = iFrameOptions.hostElementSelector;

      if (!src || !width || !height || !hostElementSelector) {
        throw new Error("iFrameOptions is missing one of the required properties - {src, width, height, hostElementSelector}.");
      }

      var iFrame = document.createElement("iFrame");
      iFrame.onload = onLoadCallback;
      iFrame.onerror = this.handleLoadError;
      iFrame.src = src;
      iFrame.width = width;
      iFrame.height = height;
      iFrame.allow = "microphone; autoplay";
      iFrame.id = "hubspot-calling-extension-iframe";
      var element = IFrameManager.getHostElement(hostElementSelector);
      element.innerHTML = "";
      element.appendChild(iFrame);
      return element.querySelector("iFrame");
    }
  }]);

  return IFrameManager;
}();

/* harmony default export */ var src_IFrameManager = (IFrameManager_IFrameManager);
// CONCATENATED MODULE: ./src/CallingExtensions.js
"use es6";

function CallingExtensions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CallingExtensions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CallingExtensions_createClass(Constructor, protoProps, staticProps) { if (protoProps) CallingExtensions_defineProperties(Constructor.prototype, protoProps); if (staticProps) CallingExtensions_defineProperties(Constructor, staticProps); return Constructor; }



/*
 * CallingExtensions allows call providers to communicate with HubSpot.
 */

var CallingExtensions_CallingExtensions = /*#__PURE__*/function () {
  function CallingExtensions(options) {
    var _this = this;

    CallingExtensions_classCallCheck(this, CallingExtensions);

    if (!options || !options.eventHandlers) {
      throw new Error("Invalid options or missing eventHandlers.");
    }

    this.options = options;
    this.iFrameManager = new src_IFrameManager({
      debugMode: options.debugMode,
      onMessageHandler: function onMessageHandler(event) {
        return _this.onMessageHandler(event);
      }
    });
  }

  CallingExtensions_createClass(CallingExtensions, [{
    key: "initialized",
    value: function initialized(userData) {
      this.sendMessage({
        type: messageType.INITIALIZED,
        data: userData
      });
    }
  }, {
    key: "userLoggedIn",
    value: function userLoggedIn() {
      this.sendMessage({
        type: messageType.LOGGED_IN
      });
    }
  }, {
    key: "userLoggedOut",
    value: function userLoggedOut() {
      this.sendMessage({
        type: messageType.LOGGED_OUT
      });
    }
  }, {
    key: "incomingCall",
    value: function incomingCall(callDetails) {
      this.sendMessage({
        type: messageType.INCOMING_CALL,
        data: callDetails
      });
    }
  }, {
    key: "outgoingCall",
    value: function outgoingCall(callDetails) {
      this.sendMessage({
        type: messageType.OUTGOING_CALL_STARTED,
        data: callDetails
      });
    }
  }, {
    key: "callAnswered",
    value: function callAnswered() {
      this.sendMessage({
        type: messageType.CALL_ANSWERED
      });
    }
  }, {
    key: "callData",
    value: function callData(data) {
      this.sendMessage({
        type: messageType.CALL_DATA,
        data: data
      });
    }
  }, {
    key: "callEnded",
    value: function callEnded(engagementData) {
      this.sendMessage({
        type: messageType.CALL_ENDED,
        data: engagementData
      });
    }
  }, {
    key: "callCompleted",
    value: function callCompleted(callCompletedData) {
      this.sendMessage({
        type: messageType.CALL_COMPLETED,
        data: callCompletedData
      });
    }
  }, {
    key: "sendError",
    value: function sendError(errorData) {
      this.sendMessage({
        type: messageType.ERROR,
        data: errorData
      });
    }
  }, {
    key: "resizeWidget",
    value: function resizeWidget(sizeInfo) {
      this.sendMessage({
        type: messageType.RESIZE_WIDGET,
        data: sizeInfo
      });
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(message) {
      this.iFrameManager.sendMessage(message);
    }
  }, {
    key: "onMessageHandler",
    value: function onMessageHandler(event) {
      var type = event.type,
          data = event.data;
      var eventHandlers = this.options.eventHandlers;
      var handler;

      switch (type) {
        case messageType.READY:
          {
            var onReady = eventHandlers.onReady;
            handler = onReady;
            break;
          }

        case messageType.DIAL_NUMBER:
          {
            var onDialNumber = eventHandlers.onDialNumber;
            handler = onDialNumber;
            break;
          }

        case messageType.ENGAGEMENT_CREATED:
          {
            var onEngagementCreated = eventHandlers.onEngagementCreated;
            handler = onEngagementCreated;
            break;
          }

        case messageType.END_CALL:
          {
            var onEndCall = eventHandlers.onEndCall;
            handler = onEndCall;
            break;
          }

        case messageType.VISIBILITY_CHANGED:
          {
            var onVisibilityChanged = eventHandlers.onVisibilityChanged;
            handler = onVisibilityChanged;
            break;
          }

        case messageType.SET_CALL_STATE:
          {
            var onSetCallState = eventHandlers.onSetCallState;
            handler = onSetCallState;
            break;
          }

        default:
          {
            // Send back a message indicating an unknown event is received
            this.sendMessage({
              type: messageType.ERROR,
              data: {
                type: errorType.UNKNOWN_MESSAGE_TYPE,
                data: {
                  originalMessage: event
                }
              }
            });
            break;
          }
      }

      handler = handler || eventHandlers.defaultEventHandler;

      if (handler) {
        handler(data, event);
      } else {
        console.error("No event handler is available to handle message of type: ".concat(type));
      }
    }
  }]);

  return CallingExtensions;
}();

/* harmony default export */ var src_CallingExtensions = (CallingExtensions_CallingExtensions);
// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index = __webpack_exports__["default"] = (src_CallingExtensions);


/***/ })
/******/ ]);
});