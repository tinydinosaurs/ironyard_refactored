(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/***************************	 	
		PAGE VARIABLES		
***************************/
var homePage = $('.home-page');
var animalPage = $('.animal-album');
var cloudPage = $('.cloud-album');
var treePage = $('.tree-album');
var rainPage = $('.rain-album');
var rainbowPage = $('.rainbow-album');
var randomPage = $('.random-album');
var sidebarEl = $('.sidebar');
var slideShow = $('.slideshow');

/***************************	 	
	NAVIGATION VARIABLES		
***************************/
var homeEl = $('.home');
var animalsEl = $('.animals');
var cloudsEl = $('.clouds');
var treesEl = $('.trees');
var rainyEl = $('.rainy');
var rainbowsEl = $('.rainbows');
var randomEl = $('.random');

/***************************	 	
		PHOTO ALBUMS		
***************************/

var animalPix = [{
	imageUrl: 'images/animals/milo.jpg',
	title: 'milo'
}, {
	imageUrl: 'images/animals/grackles.jpg',
	title: 'grackles'
}, {
	imageUrl: 'images/animals/bees.jpg',
	title: 'bees!'
}, {
	imageUrl: 'images/animals/squirrel.jpg',
	title: 'squirrel'
}, {
	imageUrl: 'images/animals/purple_martins.jpg',
	title: 'purple martins'
}, {
	imageUrl: 'images/animals/milo2.jpg',
	title: 'milo again'
}];

// show home page; hide sidebar and everything else
homeEl.on('click', function (e) {
	sidebarEl.addClass('hidden');
	homePage.removeClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
	slideShow.addClass('hidden');
});

// show animal page and sidebar; hide everything else
animalsEl.on('click', function (e) {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.removeClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
	slideShow.addClass('hidden');
});

// show cloud page and sidebar; hide everything else
cloudsEl.on('click', function (e) {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.removeClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
	slideShow.addClass('hidden');
});

// show tree page and sidebar; hide everything else
treesEl.on('click', function (e) {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.removeClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
	slideShow.addClass('hidden');
});

// show rainy page and sidebar; hide everything else
rainyEl.on('click', function (e) {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.removeClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
	slideShow.addClass('hidden');
});

// show rainbow page and sidebar; hide everything else
rainbowsEl.on('click', function (e) {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.removeClass('hidden');
	randomPage.addClass('hidden');
	slideShow.addClass('hidden');
});

// show random page and sidebar; hide everything else
randomEl.on('click', function (e) {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.removeClass('hidden');
	slideShow.addClass('hidden');
});

$('.image-1').on('click', function (e) {
	animalPage.addClass('hidden');
	slideShow.removeClass('hidden');
	$('.image-title').html(animalPix[0].title);
	$('.image-url').attr('src', animalPix[0].imageUrl);
	console.log('yo');
});

},{}]},{},[1]);
