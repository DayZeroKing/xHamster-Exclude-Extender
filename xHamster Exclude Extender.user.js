// ==UserScript==
// @name         xHamster Exclude Extender
// @version      0.1
// @description  Extends the Max Length for Exclude
// @author       DayZeroKing
// @match        https://xhamster.com/search/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByName("exclude")[0].maxLength = 6000;
})();