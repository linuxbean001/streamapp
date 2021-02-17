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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/CallingExtensions.js":
/*!***********************************!*\
  !*** ../src/CallingExtensions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IFrameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IFrameManager */ \"../src/IFrameManager.js\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ \"../src/Constants.js\");\n\"use es6\";\r\n\r\n\r\n\r\n\r\n/*\r\n * CallingExtensions allows call providers to communicate with HubSpot.\r\n */\r\nclass CallingExtensions {\r\n  constructor(options) {\r\n    if (!options || !options.eventHandlers) {\r\n      throw new Error(\"Invalid options or missing eventHandlers.\");\r\n    }\r\n\r\n    this.options = options;\r\n\r\n    this.iFrameManager = new _IFrameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n      debugMode: options.debugMode,\r\n      onMessageHandler: event => this.onMessageHandler(event)\r\n    });\r\n  }\r\n\r\n  initialized(userData) {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].INITIALIZED,\r\n      data: userData\r\n    });\r\n  }\r\n\r\n  userLoggedIn() {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].LOGGED_IN\r\n    });\r\n  }\r\n\r\n  userLoggedOut() {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].LOGGED_OUT\r\n    });\r\n  }\r\n\r\n  incomingCall(callDetails) {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].INCOMING_CALL,\r\n      data: callDetails\r\n    });\r\n  }\r\n\r\n  outgoingCall(callDetails) {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].OUTGOING_CALL_STARTED,\r\n      data: callDetails\r\n    });\r\n  }\r\n\r\n  callAnswered() {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].CALL_ANSWERED\r\n    });\r\n  }\r\n\r\n  callData(data) {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].CALL_DATA,\r\n      data\r\n    });\r\n  }\r\n\r\n  callEnded(engagementData) {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].CALL_ENDED,\r\n      data: engagementData\r\n    });\r\n  }\r\n\r\n  callCompleted(callCompletedData) {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].CALL_COMPLETED,\r\n      data: callCompletedData\r\n    });\r\n  }\r\n\r\n  sendError(errorData) {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].ERROR,\r\n      data: errorData\r\n    });\r\n  }\r\n\r\n  resizeWidget(sizeInfo) {\r\n    this.sendMessage({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].RESIZE_WIDGET,\r\n      data: sizeInfo\r\n    });\r\n  }\r\n\r\n  sendMessage(message) {\r\n    this.iFrameManager.sendMessage(message);\r\n  }\r\n\r\n  onMessageHandler(event) {\r\n    const { type, data } = event;\r\n    const { eventHandlers } = this.options;\r\n    let handler;\r\n    switch (type) {\r\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].READY: {\r\n        const { onReady } = eventHandlers;\r\n        handler = onReady;\r\n        break;\r\n      }\r\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].DIAL_NUMBER: {\r\n        const { onDialNumber } = eventHandlers;\r\n        handler = onDialNumber;\r\n        break;\r\n      }\r\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].ENGAGEMENT_CREATED: {\r\n        const { onEngagementCreated } = eventHandlers;\r\n        handler = onEngagementCreated;\r\n        break;\r\n      }\r\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].END_CALL: {\r\n        const { onEndCall } = eventHandlers;\r\n        handler = onEndCall;\r\n        break;\r\n      }\r\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].VISIBILITY_CHANGED: {\r\n        const { onVisibilityChanged } = eventHandlers;\r\n        handler = onVisibilityChanged;\r\n        break;\r\n      }\r\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].SET_CALL_STATE: {\r\n        const { onSetCallState } = eventHandlers;\r\n        handler = onSetCallState;\r\n        break;\r\n      }\r\n      default: {\r\n        // Send back a message indicating an unknown event is received\r\n        this.sendMessage({\r\n          type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"messageType\"].ERROR,\r\n          data: {\r\n            type: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"errorType\"].UNKNOWN_MESSAGE_TYPE,\r\n            data: {\r\n              originalMessage: event\r\n            }\r\n          }\r\n        });\r\n        break;\r\n      }\r\n    }\r\n    handler = handler || eventHandlers.defaultEventHandler;\r\n    if (handler) {\r\n      handler(data, event);\r\n    } else {\r\n      console.error(\r\n        `No event handler is available to handle message of type: ${type}`\r\n      );\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CallingExtensions);\r\n\n\n//# sourceURL=webpack:///../src/CallingExtensions.js?");

/***/ }),

/***/ "../src/Constants.js":
/*!***************************!*\
  !*** ../src/Constants.js ***!
  \***************************/
/*! exports provided: VERSION, messageType, errorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VERSION\", function() { return VERSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messageType\", function() { return messageType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorType\", function() { return errorType; });\n\"use es6\";\r\n\r\nconst VERSION = \"0.0.1\";\r\n\r\nconst messageTypeList = [\r\n  \"CALL_ANSWERED\",\r\n  \"CALL_COMPLETED\",\r\n  \"CALL_DATA\",\r\n  \"CALL_ENDED\",\r\n  \"DIAL_NUMBER\",\r\n  \"ENGAGEMENT_CREATED\",\r\n\r\n  \"END_CALL\",\r\n  \"ERROR\",\r\n  \"INCOMING_CALL\",\r\n  \"INITIALIZED\",\r\n  \"LOGGED_IN\",\r\n  \"LOGGED_OUT\",\r\n  \"OUTGOING_CALL_STARTED\",\r\n  \"READY\",\r\n  \"RESIZE_WIDGET\",\r\n  \"SET_CALL_STATE\",\r\n  \"SET_WIDGET_URL\",\r\n  \"SYNC\",\r\n  \"SYNC_ACK\",\r\n  \"SYNC_ACK_FAILED\",\r\n  \"UNLOADING\",\r\n  \"VISIBILITY_CHANGED\"\r\n];\r\n\r\nconst errorTypeList = [\"UNKNOWN_MESSAGE_TYPE\", \"GENERIC\"];\r\n\r\nfunction mirrorKeys(keyList) {\r\n  const keyObject = {};\r\n  keyList.forEach(keyName => {\r\n    keyObject[keyName] = keyName;\r\n  });\r\n  return keyObject;\r\n}\r\n\r\nconst messageType = mirrorKeys(messageTypeList);\r\nconst errorType = mirrorKeys(errorTypeList);\r\n\n\n//# sourceURL=webpack:///../src/Constants.js?");

/***/ }),

/***/ "../src/IFrameManager.js":
/*!*******************************!*\
  !*** ../src/IFrameManager.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"../src/Constants.js\");\n\"use es6\";\r\n\r\n\r\n\r\n/*\r\n * IFrameManager abstracts the iFrame communication between the IFrameHost and an IFrame\r\n * An IFrameManager instance can act as part of the IFrameHost and an IFrame depending on\r\n * the options.\r\n */\r\nclass IFrameManager {\r\n  constructor(options) {\r\n    this.options = options;\r\n    const { iFrameOptions, onMessageHandler, debugMode } = options;\r\n\r\n    this.onMessageHandler = onMessageHandler;\r\n    if (!this.onMessageHandler) {\r\n      throw new Error(\"Invalid options: onMessageHandler is not defined\");\r\n    }\r\n    this.isIFrameHost = !!iFrameOptions;\r\n    this.debugMode = debugMode;\r\n\r\n    // Keeps track of all the callbacks\r\n    this.callbacks = {};\r\n\r\n    this.instanceId = Date.now();\r\n    this.instanceRegexp = new RegExp(`^${this.instanceId}`);\r\n    this.isReady = false;\r\n\r\n    this.messageHandler = event => this.onMessage(event);\r\n    window.addEventListener(\"message\", this.messageHandler);\r\n\r\n    if (iFrameOptions) {\r\n      this.iFrame = IFrameManager.createIFrame(iFrameOptions, () => {\r\n        this.firstSyncSent = Date.now();\r\n        this.isReady = false;\r\n        this.sendSync();\r\n      });\r\n    }\r\n\r\n    this.destinationWindow = iFrameOptions\r\n      ? this.iFrame.contentWindow\r\n      : window.parent;\r\n\r\n    this.destinationHost = IFrameManager.getDestinationHost(iFrameOptions);\r\n  }\r\n\r\n  /*\r\n   * Creates a new message id\r\n   */\r\n  static createMessageId(instanceId) {\r\n    return `${instanceId}_${Date.now()}`;\r\n  }\r\n\r\n  /*\r\n   * Gets the html element that hosts the iFrame\r\n   */\r\n  static getHostElement(hostElementSelector) {\r\n    const hostElement = document.querySelector(hostElementSelector);\r\n    if (!hostElement) {\r\n      throw new Error(\r\n        `hostElement not found. Selector - ${hostElementSelector}`\r\n      );\r\n    }\r\n    return hostElement;\r\n  }\r\n\r\n  static extractHostFromUrl(url) {\r\n    const a = document.createElement(\"a\");\r\n    a.href = url;\r\n    return `${a.protocol}//${a.host}`;\r\n  }\r\n\r\n  static getDestinationHost(iFrameOptions) {\r\n    const url = iFrameOptions ? iFrameOptions.src : document.referrer;\r\n    return IFrameManager.extractHostFromUrl(url);\r\n  }\r\n\r\n  static createIFrame(iFrameOptions, onLoadCallback) {\r\n    const { src, width, height, hostElementSelector } = iFrameOptions;\r\n\r\n    if (!src || !width || !height || !hostElementSelector) {\r\n      throw new Error(\r\n        \"iFrameOptions is missing one of the required properties - {src, width, height, hostElementSelector}.\"\r\n      );\r\n    }\r\n\r\n    const iFrame = document.createElement(\"iFrame\");\r\n    iFrame.onload = onLoadCallback;\r\n    iFrame.onerror = this.handleLoadError;\r\n    iFrame.src = src;\r\n    iFrame.width = width;\r\n    iFrame.height = height;\r\n    iFrame.allow = \"microphone; autoplay\";\r\n    iFrame.id = \"hubspot-calling-extension-iframe\";\r\n\r\n    const element = IFrameManager.getHostElement(hostElementSelector);\r\n    element.innerHTML = \"\";\r\n    element.appendChild(iFrame);\r\n\r\n    return element.querySelector(\"iFrame\");\r\n  }\r\n\r\n  handleLoadError() {\r\n    this.onMessageHandler({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_0__[\"messageType\"].SYNC_ACK_FAILED\r\n    });\r\n  }\r\n\r\n  updateIFrameSize(sizeInfo) {\r\n    const { width, height } = sizeInfo;\r\n    const formatSize = size => (typeof size === \"number\" ? `${size}px` : size);\r\n    if (width) {\r\n      this.iFrame.setAttribute(\"width\", formatSize(width));\r\n    }\r\n    if (height) {\r\n      this.iFrame.setAttribute(\"height\", formatSize(height));\r\n    }\r\n  }\r\n\r\n  onReady() {\r\n    this.isReady = true;\r\n    this.onMessageHandler({\r\n      type: _Constants__WEBPACK_IMPORTED_MODULE_0__[\"messageType\"].READY\r\n    });\r\n  }\r\n  /*\r\n   * Unload the iFrame\r\n   */\r\n  remove() {\r\n    window.removeEventListener(\"message\", this.messageHandler);\r\n\r\n    if (this.iFrame) {\r\n      const element = IFrameManager.getHostElement(\r\n        this.options.iFrameOptions.hostElementSelector\r\n      );\r\n      element.innerHTML = \"\";\r\n\r\n      this.isReady = false;\r\n      this.iFrame = null;\r\n      this.options = null;\r\n    }\r\n  }\r\n\r\n  /*\r\n   * Send a message to the destination window.\r\n   */\r\n  sendMessage(message, callback) {\r\n    const { type } = message;\r\n    if (type !== _Constants__WEBPACK_IMPORTED_MODULE_0__[\"messageType\"].SYNC && !this.isReady) {\r\n      // Do not send a message unless the iFrame is ready to receive.\r\n      console.warn(\"iFrame not initialized to send a message\", message);\r\n      return;\r\n    }\r\n\r\n    let { messageId } = message;\r\n    if (!messageId) {\r\n      // Initiating a new message\r\n      messageId = IFrameManager.createMessageId(this.instanceId);\r\n      if (callback) {\r\n        // Keep track of the callback\r\n        this.callbacks[messageId] = callback;\r\n      }\r\n    }\r\n\r\n    const newMessage = Object.assign({}, message, {\r\n      messageId\r\n    });\r\n\r\n    this.logDebugMessage(\"postMessage\", type, message);\r\n    this.destinationWindow.postMessage(newMessage, this.destinationHost);\r\n  }\r\n\r\n  onMessage(event) {\r\n    const { data, origin } = event;\r\n    const { type } = event.data;\r\n    if (type === _Constants__WEBPACK_IMPORTED_MODULE_0__[\"messageType\"].SYNC) {\r\n      // The iFrame host can send this message multiple times, don't respond more than once\r\n      if (!this.isReady) {\r\n        this.isReady = true;\r\n\r\n        const message = Object.assign({}, event.data, {\r\n          type: _Constants__WEBPACK_IMPORTED_MODULE_0__[\"messageType\"].SYNC_ACK,\r\n          debugMode: this.debugMode,\r\n          version: _Constants__WEBPACK_IMPORTED_MODULE_0__[\"VERSION\"],\r\n          iFrameUrl: IFrameManager.extractHostFromUrl(window.location.href)\r\n        });\r\n\r\n        const { hostUrl } = event.data;\r\n        this.destinationHost = hostUrl || this.destinationHost;\r\n        this.sendMessage(message);\r\n        this.onReady();\r\n      }\r\n      return;\r\n    }\r\n\r\n    if (this.destinationHost !== origin) {\r\n      // Ignore messages from an unknown origin\r\n      return;\r\n    }\r\n\r\n    if (type === _Constants__WEBPACK_IMPORTED_MODULE_0__[\"messageType\"].SET_WIDGET_URL) {\r\n      const { iFrameUrl } = data;\r\n      this.destinationHost = iFrameUrl || this.destinationHost;\r\n      return;\r\n    }\r\n\r\n    const { messageId } = data;\r\n\r\n    if (!messageId || !type) {\r\n      return;\r\n    }\r\n\r\n    this.logDebugMessage(\"onMessage\", type, { data });\r\n    if (this.instanceRegexp.test(messageId)) {\r\n      // This is a response to some message generated by HubSpot\r\n      const callBack = this.callbacks[messageId];\r\n      if (callBack) {\r\n        callBack(data);\r\n        delete this.callbacks[messageId];\r\n      }\r\n      return;\r\n    }\r\n\r\n    // This is a new message, let the handler handle it.\r\n    this.onMessageHandler(data);\r\n  }\r\n\r\n  sendSync() {\r\n    // No SYNC_ACK message after 30sec results in a failure\r\n    if (Date.now() - this.firstSyncSent > 30000) {\r\n      this.onMessageHandler({\r\n        type: _Constants__WEBPACK_IMPORTED_MODULE_0__[\"messageType\"].SYNC_ACK_FAILED\r\n      });\r\n      return;\r\n    }\r\n\r\n    this.sendMessage(\r\n      {\r\n        type: _Constants__WEBPACK_IMPORTED_MODULE_0__[\"messageType\"].SYNC,\r\n        hostUrl: IFrameManager.extractHostFromUrl(window.location.href)\r\n      },\r\n      eventData => {\r\n        const { iFrameUrl } = eventData;\r\n        this.destinationHost = iFrameUrl || this.destinationHost;\r\n        this.onReady();\r\n        this.debugMode = eventData && eventData.debugMode;\r\n      }\r\n    );\r\n\r\n    // In cases where the call widget loads the calling extensions asynchronously, message\r\n    // handlers may not be set up - retry until a response from the iFrame\r\n    window.setTimeout(() => {\r\n      if (this.iFrame && !this.isReady) {\r\n        this.sendSync();\r\n      }\r\n    }, 100);\r\n  }\r\n\r\n  logDebugMessage(...args) {\r\n    if (this.debugMode) {\r\n      const msg = this.isIFrameHost ? \"IFrame host\" : \"IFrame\";\r\n      args.unshift(msg);\r\n      console.log.call(null, args);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (IFrameManager);\r\n\n\n//# sourceURL=webpack:///../src/IFrameManager.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_CallingExtensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/CallingExtensions */ \"../src/CallingExtensions.js\");\n/* harmony import */ var _src_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Constants */ \"../src/Constants.js\");\n// import CallingExtensions, { Constants } from \"@hubspot/calling-extensions-sdk\";\r\n\r\n\r\n\r\n\r\nconst callback = () => {\r\n  let rowId = 0;\r\n  const incomingMsgContainer = document.querySelector(\"#incomingMsgs\");\r\n  function appendMsg(data, event) {\r\n    const div = document.createElement(\"div\");\r\n    rowId += 1;\r\n    div.innerHTML = `<span>${rowId}: </span><span>${\r\n      event.type\r\n    }, ${JSON.stringify(data)}</span>`;\r\n    incomingMsgContainer.append(div);\r\n  }\r\n\r\n  const defaultSize = {\r\n    width: 400,\r\n    height: 600\r\n  };\r\n\r\n  const state = {};\r\n\r\n  const cti = new _src_CallingExtensions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    debugMode: true,\r\n    eventHandlers: {\r\n      onReady: () => {\r\n        cti.initialized({\r\n          isLoggedIn: true,\r\n          sizeInfo: defaultSize\r\n        });\r\n      },\r\n      onDialNumber: (data, rawEvent) => {\r\n        appendMsg(data, rawEvent);\r\n        const { phoneNumber } = data;\r\n        state.phoneNumber = phoneNumber;\r\n        window.setTimeout(\r\n          () =>\r\n            cti.outgoingCall({\r\n              createEngagement: true,\r\n              phoneNumber\r\n            }),\r\n          500\r\n        );\r\n      },\r\n      onEngagementCreated: (data, rawEvent) => {\r\n        const { engagementId } = data;\r\n        state.engagementId = engagementId;\r\n        appendMsg(data, rawEvent);\r\n      },\r\n      onEndCall: () => {\r\n        window.setTimeout(() => {\r\n          cti.callEnded();\r\n        }, 500);\r\n      },\r\n      onVisibilityChanged: (data, rawEvent) => {\r\n        appendMsg(data, rawEvent);\r\n      }\r\n    }\r\n  });\r\n\r\n  const element = document.querySelector(\".controls\");\r\n  element.addEventListener(\"click\", event => {\r\n    const clickedButtonValue = event.target.value;\r\n    switch (clickedButtonValue) {\r\n      case \"initialized\":\r\n        cti.initialized({\r\n          isLoggedIn: true\r\n        });\r\n        break;\r\n      case \"log in\":\r\n        cti.userLoggedIn();\r\n        break;\r\n      case \"log out\":\r\n        cti.userLoggedOut();\r\n        break;\r\n      // Calls\r\n      case \"incoming call\":\r\n        window.setTimeout(() => {\r\n          cti.incomingCall();\r\n        }, 500);\r\n        break;\r\n      case \"outgoing call started\":\r\n        window.setTimeout(() => {\r\n          cti.outgoingCall({\r\n            createEngagement: \"true\",\r\n            phoneNumber: state.phoneNumber\r\n          });\r\n        }, 500);\r\n        break;\r\n      case \"call answered\":\r\n        cti.callAnswered();\r\n        break;\r\n      case \"call ended\":\r\n        cti.callEnded();\r\n        break;\r\n      case \"call completed\":\r\n        cti.callCompleted({\r\n          engagementId: state.engagementId\r\n        });\r\n        break;\r\n      case \"send error\":\r\n        cti.sendError({\r\n          type: _src_Constants__WEBPACK_IMPORTED_MODULE_1__[\"errorType\"].GENERIC,\r\n          message: \"This is a message shown in Hubspot UI\"\r\n        });\r\n        break;\r\n      case \"change size\":\r\n        defaultSize.width += 20;\r\n        defaultSize.height += 20;\r\n        cti.resizeWidget({\r\n          width: defaultSize.width,\r\n          height: defaultSize.height\r\n        });\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  });\r\n};\r\n\r\nif (\r\n  document.readyState === \"interactive\" ||\r\n  document.readyState === \"complete\"\r\n) {\r\n  window.setTimeout(() => callback(), 1000);\r\n} else {\r\n  document.addEventListener(\"DOMContentLoaded\", callback);\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });
});