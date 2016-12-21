
JavaScript 

Banu Prakash. C
banuprakashc@yahoo.co.in
https://github.com/BanuPrakash/GE

---------------------------

Softwares Required:

1) Editor -- Sublime Text 3
2) Node JS --> nodejs.org [ LTS ]

-----------------------------------------------

JavaScript
----------
	
	executes on JavaScript engine.

	JavaScript engines avaialble:
		1) V8
		2) SpiderMonkey
		3) NashHorn
		4) Chakra
		5) Continnum

		ECMA 5
		ES2015 -- ECMA 6

	--------------
	
	JavaScript basics

	1) JS does not have a concept of declaring data types

		Number, boolean, String, undefined, null, Object

		name = "Smith";

		age = 24;

		employed = false;

		---------

		a.js

		var data = 10;

		function test() {
			var first = 15;

				if( first > 10 ) {
					var second = 20; // hoisted to functional level
					third = 30; // becomes a global var
					console.log(data +"," + first + "," + second + "," + third);
				}
				console.log(data +"," + first + "," + second + "," + third);
		}	
		test();
		console.log(data +"," + first + "," + second + "," + third);

		-------------------

		function doTask( x, y ) {
			return x + y;
		}

		var res = doTask(5,2); // 7


		function doTask( x, y ) {
			return
				 x + y;
		}

		var res = doTask(5,2); // undefined

		-----------------------------------------------------------

		Lexical Environment and Scope
		

		var data = 10;

		function test() {
			var first = 15;

				function second () {
					var second = 20; // hoisted to functional level
					console.log(data +"," + first + "," + second + "," + third);
				}
				console.log(data +"," + first + "," + second + "," + third);
		}	
------------------------------------------------------------------------------------

		Functional Programming with JavaScript

		functions can be declared as below:

		function test() {

		}

		var test = function() {

		}

		var test = new Function(x, y , "return x + y");

		test(4,5); // 9


		functions are first-class members like var or objects

		fuction doTask(x) {
			x(); // 10
		}

		var test = function() {
			return 10;
		}

		doTask(test);
		---------

		fuction doTask(x) {
			// x will be 10
		}

		var test = function() {
			return 10;
		}()

		doTask(test);


		Functional Style of Programming done using High Order functions:

		High Order functions:
			1) Functions which accept other functions as arguments
			2) Functions return a function

			-------

			Map, reduce, filter, sort
---------------------------------------------------------------------

JS OOP
-----
	Different ways of creating objects

	1) var obj = new Object();
		obj.id = 10;
		obj.name = "Smith";
		obj.doTask = function() {

		}

	2) var nboj = Object.create(obj); // prototype inheritance


	3) JSON

		JavaScript Object Notation

		var customer = {
			"id": 1,
			"firstName": "Smith",
			"lastName" : "Some",
			"doTask" : function() {

			}
		};

	4) Using Function constructor

		function Employee(id, name) {
			this.id = id;
			this.name = name;
		}

		var e1 = new Employee(100,"Peter");

		a) Object owned instance methods

			function Employee(id, name) {
				this.id = id;
				this.name = name;
				this.doTask = function () {
					return this.id + "," + this.name;
				}
			}
			var e1 = new Employee(100,"Peter");
			var e2 = new Employee(101,"Roger");

		b) class owned instance methods

			function Employee(id, name) {
				this.id = id;
				this.name = name;
			}

			Employee.prototype.doTask = function () {
					return this.id + "," + this.name;
			}

		c) class owned class method

			function Employee(id, name) {
				this.id = id;
				this.name = name;
			}
			// static
			Employee.doTask = function () {
				// code without "this"
			}
--------------------------------------------------------------------------

	Few JavaScript patterns:

	IIFE -- Immeditely Invoke Function Expression [ Self Invoking function ]

	(function(){ 

	})();

	1) Module Pattern

		var module = (function(){ 
			var x  = 100;
			function test() {
				// code
			}

			return {
				doTask : test
			}
		})();


		module.x; //error
		moduel.test(); // error

		module.doTask();

	2) Factory Pattern
	3) Chain
	4) Namespace
	5) Observer
------------------------------------


