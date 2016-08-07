this["TydelLogger"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = function tydelLogger(model) {
	  var cacheByMethod = {};

	  model.on('method:call', function (event) {
	    cacheByMethod[event.path.join('.')] = model.toJS();
	  });

	  model.on('method:change', function (event) {
	    var p = event.path.join('.');
	    var prev = cacheByMethod[p];
	    var next = model.toJS();

	    if (typeof console.group === 'function') {
	      console.group(p);
	    }

	    console.log('%cprev state', 'color: #9e9e9e; font-weight: bold;', prev);
	    console.log('%cnext state', 'color: #4cAf50; font-weight: bold;', next);

	    if (typeof console.groupEnd === 'function') {
	      console.groupEnd();
	    }
	  });
	}


/***/ }
/******/ ]);