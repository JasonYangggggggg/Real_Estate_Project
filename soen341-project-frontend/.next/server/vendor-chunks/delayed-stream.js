/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/delayed-stream";
exports.ids = ["vendor-chunks/delayed-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js":
/*!***********************************************************!*\
  !*** ./node_modules/delayed-stream/lib/delayed_stream.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar util = __webpack_require__(/*! util */ \"util\");\n\nmodule.exports = DelayedStream;\nfunction DelayedStream() {\n  this.source = null;\n  this.dataSize = 0;\n  this.maxDataSize = 1024 * 1024;\n  this.pauseStream = true;\n\n  this._maxDataSizeExceeded = false;\n  this._released = false;\n  this._bufferedEvents = [];\n}\nutil.inherits(DelayedStream, Stream);\n\nDelayedStream.create = function(source, options) {\n  var delayedStream = new this();\n\n  options = options || {};\n  for (var option in options) {\n    delayedStream[option] = options[option];\n  }\n\n  delayedStream.source = source;\n\n  var realEmit = source.emit;\n  source.emit = function() {\n    delayedStream._handleEmit(arguments);\n    return realEmit.apply(source, arguments);\n  };\n\n  source.on('error', function() {});\n  if (delayedStream.pauseStream) {\n    source.pause();\n  }\n\n  return delayedStream;\n};\n\nObject.defineProperty(DelayedStream.prototype, 'readable', {\n  configurable: true,\n  enumerable: true,\n  get: function() {\n    return this.source.readable;\n  }\n});\n\nDelayedStream.prototype.setEncoding = function() {\n  return this.source.setEncoding.apply(this.source, arguments);\n};\n\nDelayedStream.prototype.resume = function() {\n  if (!this._released) {\n    this.release();\n  }\n\n  this.source.resume();\n};\n\nDelayedStream.prototype.pause = function() {\n  this.source.pause();\n};\n\nDelayedStream.prototype.release = function() {\n  this._released = true;\n\n  this._bufferedEvents.forEach(function(args) {\n    this.emit.apply(this, args);\n  }.bind(this));\n  this._bufferedEvents = [];\n};\n\nDelayedStream.prototype.pipe = function() {\n  var r = Stream.prototype.pipe.apply(this, arguments);\n  this.resume();\n  return r;\n};\n\nDelayedStream.prototype._handleEmit = function(args) {\n  if (this._released) {\n    this.emit.apply(this, args);\n    return;\n  }\n\n  if (args[0] === 'data') {\n    this.dataSize += args[1].length;\n    this._checkIfMaxDataSizeExceeded();\n  }\n\n  this._bufferedEvents.push(args);\n};\n\nDelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {\n  if (this._maxDataSizeExceeded) {\n    return;\n  }\n\n  if (this.dataSize <= this.maxDataSize) {\n    return;\n  }\n\n  this._maxDataSizeExceeded = true;\n  var message =\n    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'\n  this.emit('error', new Error(message));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVsYXllZC1zdHJlYW0vbGliL2RlbGF5ZWRfc3RyZWFtLmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsb0RBQXdCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZW4zNDEtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kZWxheWVkLXN0cmVhbS9saWIvZGVsYXllZF9zdHJlYW0uanM/MWE0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJykuU3RyZWFtO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVsYXllZFN0cmVhbTtcbmZ1bmN0aW9uIERlbGF5ZWRTdHJlYW0oKSB7XG4gIHRoaXMuc291cmNlID0gbnVsbDtcbiAgdGhpcy5kYXRhU2l6ZSA9IDA7XG4gIHRoaXMubWF4RGF0YVNpemUgPSAxMDI0ICogMTAyNDtcbiAgdGhpcy5wYXVzZVN0cmVhbSA9IHRydWU7XG5cbiAgdGhpcy5fbWF4RGF0YVNpemVFeGNlZWRlZCA9IGZhbHNlO1xuICB0aGlzLl9yZWxlYXNlZCA9IGZhbHNlO1xuICB0aGlzLl9idWZmZXJlZEV2ZW50cyA9IFtdO1xufVxudXRpbC5pbmhlcml0cyhEZWxheWVkU3RyZWFtLCBTdHJlYW0pO1xuXG5EZWxheWVkU3RyZWFtLmNyZWF0ZSA9IGZ1bmN0aW9uKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZGVsYXllZFN0cmVhbSA9IG5ldyB0aGlzKCk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgZGVsYXllZFN0cmVhbVtvcHRpb25dID0gb3B0aW9uc1tvcHRpb25dO1xuICB9XG5cbiAgZGVsYXllZFN0cmVhbS5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgdmFyIHJlYWxFbWl0ID0gc291cmNlLmVtaXQ7XG4gIHNvdXJjZS5lbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsYXllZFN0cmVhbS5faGFuZGxlRW1pdChhcmd1bWVudHMpO1xuICAgIHJldHVybiByZWFsRW1pdC5hcHBseShzb3VyY2UsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgc291cmNlLm9uKCdlcnJvcicsIGZ1bmN0aW9uKCkge30pO1xuICBpZiAoZGVsYXllZFN0cmVhbS5wYXVzZVN0cmVhbSkge1xuICAgIHNvdXJjZS5wYXVzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGRlbGF5ZWRTdHJlYW07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRGVsYXllZFN0cmVhbS5wcm90b3R5cGUsICdyZWFkYWJsZScsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5yZWFkYWJsZTtcbiAgfVxufSk7XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnNldEVuY29kaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNvdXJjZS5zZXRFbmNvZGluZy5hcHBseSh0aGlzLnNvdXJjZSwgYXJndW1lbnRzKTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuX3JlbGVhc2VkKSB7XG4gICAgdGhpcy5yZWxlYXNlKCk7XG4gIH1cblxuICB0aGlzLnNvdXJjZS5yZXN1bWUoKTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc291cmNlLnBhdXNlKCk7XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3JlbGVhc2VkID0gdHJ1ZTtcblxuICB0aGlzLl9idWZmZXJlZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIH0uYmluZCh0aGlzKSk7XG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzID0gW107XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByID0gU3RyZWFtLnByb3RvdHlwZS5waXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIHRoaXMucmVzdW1lKCk7XG4gIHJldHVybiByO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUuX2hhbmRsZUVtaXQgPSBmdW5jdGlvbihhcmdzKSB7XG4gIGlmICh0aGlzLl9yZWxlYXNlZCkge1xuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXJnc1swXSA9PT0gJ2RhdGEnKSB7XG4gICAgdGhpcy5kYXRhU2l6ZSArPSBhcmdzWzFdLmxlbmd0aDtcbiAgICB0aGlzLl9jaGVja0lmTWF4RGF0YVNpemVFeGNlZWRlZCgpO1xuICB9XG5cbiAgdGhpcy5fYnVmZmVyZWRFdmVudHMucHVzaChhcmdzKTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLl9jaGVja0lmTWF4RGF0YVNpemVFeGNlZWRlZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fbWF4RGF0YVNpemVFeGNlZWRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmRhdGFTaXplIDw9IHRoaXMubWF4RGF0YVNpemUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9tYXhEYXRhU2l6ZUV4Y2VlZGVkID0gdHJ1ZTtcbiAgdmFyIG1lc3NhZ2UgPVxuICAgICdEZWxheWVkU3RyZWFtI21heERhdGFTaXplIG9mICcgKyB0aGlzLm1heERhdGFTaXplICsgJyBieXRlcyBleGNlZWRlZC4nXG4gIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IobWVzc2FnZSkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js\n");

/***/ })

};
;