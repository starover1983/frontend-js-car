'use strict';
var car = {
    color: "white",
    dours: 4,
    speed: 0,
    defaultSpeed: 60,
    maxSpeed: 100,
    seats: 4,
    passengers: [],
    put: function put() {
        if (this.passengers.length < 1) {
            this.passengers.push('Driver');
        } else if (this.passengers.length < car.seats) {
            this.passengers.push(true);
        }
    },


    land: function land() {
        this.passengers.pop();
    },

    drive: function drive(newSpeed) {

        if (newSpeed === undefined && this.passengers[0]) {
            this.speed = this.defaultSpeed;
        } else if (newSpeed > this.maxSpeed && this.passengers[0]) {
            this.speed = this.maxSpeed
        } else if (!this.passengers[0]) {
            return
        } else
            return this.speed = newSpeed;

    },
}