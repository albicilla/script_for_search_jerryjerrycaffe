// ==UserScript==
// @name         toy boardgame caffe script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       albicilla
// @match        https://jellyjellycafe.com/category/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==
var $ = window.jQuery;
(function() {
    'use strict';
    var txt = "新宿";
    $("span:contains(" + txt + ")").parents(".postGames").css('background-color','red');
    console.log("Hello!");
})();
