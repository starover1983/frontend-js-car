'use strict';

var car = require('../src/js/car.js');

describe('Module "car"', function () {
	
	beforeEach(function(){
		spyOn(car, 'drive').and.callThrough()
		spyOn(car, 'put').and.callThrough()
		spyOn(car, 'land').and.callThrough()
	})
	
	describe('has a correct interface with a property', function(){
		it('"color" that is a String', function(){
			expect(car.color).toEqual(jasmine.any(String))	
		})
		it('"dours" that is a Number', function(){
			expect(car.dours).toEqual(jasmine.any(Number))	
		})
		it('"passengers" that is a Array', function(){
			expect(car.passengers).toEqual(jasmine.any(Array))	
		})
		it('"seats" that is a Number', function(){
			expect(car.seats).toEqual(jasmine.any(Number))	
		})
		it('"maxSpeed" that is a Number', function(){
			expect(car.maxSpeed).toEqual(jasmine.any(Number))	
		})
		it('"defaultSpeed" that is a Number', function(){
			expect(car.defaultSpeed).toEqual(jasmine.any(Number))	
		})
		it('"speed" that is a Number', function(){
			expect(car.speed).toEqual(jasmine.any(Number))	
		})
		it('"drive" that is a Function', function(){
			expect(car.drive).toEqual(jasmine.any(Function))	
		})
		it('"put" that is a Function', function(){
			expect(car.put).toEqual(jasmine.any(Function))	
		})
		it('"land" that is a Function', function(){
			expect(car.land).toEqual(jasmine.any(Function))	
		})
	})
	
	describe('by default has a property', function(){
		it('"color" equal "white"', function(){
			expect(car.color).toEqual("white")	
		})
		it('"dours" equal 4', function(){
			expect(car.dours).toEqual(4)	
		})
		it('"passengers" that is empty', function(){
			expect(car.passengers).toEqual([])	
		})
		it('"seats" equal 4', function(){
			expect(car.seats).toEqual(4)	
		})
		it('"maxSpeed" equal 100', function(){
			expect(car.maxSpeed).toEqual(100)	
		})
		it('"defaultSpeed" equal 60', function(){
			expect(car.defaultSpeed).toEqual(60)	
		})
		it('"speed" equal 0', function(){
			expect(car.speed).toEqual(0)	
		})
	})
	
	describe('pessangers', function(){
		afterEach(function(){
			car.speed = 0
			car.seats = 8
			car.maxSpeed = 200
			car.defaultSpeed = 150
			car.passengers.length = 0;
		})	
		
		it('can be put', function(){
			car.put()
			car.put()
			
			expect(car.passengers.length).toEqual(2)	
		})
		it('can be landed', function(){
			car.put()
			car.land()
			
			expect(car.passengers.length).toEqual(0)	
		})
		it('can\'t be put more than seats', function(){
			var times = car.seats * 2;
			while (times--) {
				car.put()
			}
			
			expect(car.passengers.length).toEqual(car.seats)	
		})
	})
	
	describe('when drived', function(){
		afterEach(function(){
			car.speed = 0
			car.seats = 8
			car.maxSpeed = 200
			car.defaultSpeed = 150
			car.passengers.length = 0;
		})	
		
		it('can\'t drive without a driver', function(){
			car.drive()
			
			expect(car.speed).toEqual(0)	
		})
		it('can drive with a driver', function(){
			car.put()
			car.drive()
			
			expect(car.speed).toBeGreaterThan(0)	
		})
		it('changes speed', function(){
			var speed = 85;
			car.put()
			car.drive(speed)
			
			expect(car.speed).toEqual(speed)	
		})
		it('doesn\'t change speed without a driver', function(){
			var speed = 85;
			car.drive(speed)
			
			expect(car.speed).toEqual(0)	
		})
		it('has a default speed', function(){
			car.put()
			car.drive()
			
			expect(car.speed).toEqual(car.defaultSpeed)	
		})
		it('is limited to max speed', function(){
			var speed = car.maxSpeed + 85;
			car.put()
			car.drive(speed)
			
			expect(car.speed).toEqual(car.maxSpeed)
		})
	})
})