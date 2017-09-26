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
/***/ (function(module, exports) {

	'use strict';

	//
	// Open Nav
	///

	var rawHamburgers = document.querySelectorAll('.js-open-nav'),
	    hamburgers = Array.prototype.slice.call(rawHamburgers),
	    navs = document.querySelectorAll('.c-Navigation'),
	    navArray = Array.prototype.slice.call(navs);

	// Give each nav a unique data attribute to match against index of the clicked
	// hamburger
	navArray.forEach(function (e) {
	  var index = navArray.indexOf(e);
	  e.setAttribute('data-index', index);
	});

	hamburgers.forEach(function (e) {

	  e.addEventListener('click', function () {

	    // get the index of the clicked hamburger and use it to select the
	    // corresponding navigation
	    var index = hamburgers.indexOf(this),
	        nav = document.querySelector('.c-Navigation[data-index=\'' + index + '\']');

	    // toggle hamburger animation
	    this.classList.toggle('is-open');

	    // toggle visibility of the nav
	    nav.classList.toggle('is-hidden\@sm');
	  });
	});

/***/ })
/******/ ]);