
Day 2
------

HTML 5, CSS3 and Bootstrap
--------------------------

Responsive Web Design (RWD)
http://www.responsinator.com/

RWD approach:
	a) Progressive enhancement
	b) Graceful degradation

	CSS3 to acheive RWD:
		1) GRID layout and Flex Box Model
		2) Responsive Images
		3) Media Queries

	Before using HTML 5 APIs and CSS3 check support by various browsers

	1) http://caniuse.com/
	2) https://html5test.com/

	Why HTML 5?
		1) More Sementics
			<header>
			<footer>
			<main>
			<article>
			<section>
			<aside>

		2) MicroData
			for Search engines
			http://schema.org/

		3) Offline Storage
			a) LocalStorage
			b) SessionStorage
			c) WebSQL
			d) IndexedDB
			e) Offline Cache

		4) GeoLocation
		5) Drag-Drop support
		6) Graphics
			a) SVG
				Events

			b) Canvas
				Pixel based
				JS has to be use

		7) Server Side Communication
			a) Server Side Events
			b) Web Sockets

		8) Web Worker


		Web Browser engines
			gecko
			trident
			webkit 

			http://flexboxin5.com/
-----------------------------------------------
Fondation Framework
Bootstrap Framework

npm install -g bower

Bower is package management for client side

Maven --> Dependency Management ---> pom.xml

npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

-----------------------------------

<picture>

<source media="(max-width: 340px)" srcset="images/small/space-needle.jpg 1x,
images/small/space-needle-2x.jpg 2x, images/small/space-needle-hd.jpg 3x">

<source media="(max-width: 700px)" srcset="images/medium/space-needle.jpg 1x,
images/medium/space-needle-2x.jpg 2x, images/medium/space-needle-hd.jpg 3x">

<img src="space-needle.jpg" alt="Space Needle">

</picture>

------------------------

Forms
Jumbotron
well
Panel
navbar 

-----------------------------------------

CSS3
fonts

body {
	font-family: sans-serif,"Times Roman"
}

-----------

HTML 5 APIs

1) Offline Storage
	a) localStorage
		localStorage.setItem("name","local_test");
		localStorage.getItem("name")


	b) sessionStorage

	c) HTML cache

		npm install -g http-server

	d) WebSQL
		

	------
	Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.

	CDN
	https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js

	--------------
	HTML5SHIV
	html5shiv is an HTML5 JavaScript shim for IE to recognise and style the HTML5 elements 
	shim, ie, html5 
	https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js

	


