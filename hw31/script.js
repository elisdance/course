class Сircle {

    constructor(radius, diameter) {
      this.radius = radius;

      this.diameter = diameter;
    }
  
    get rad() {
      return this.radius;
    }
  
    set rad(radius) {
      this.radius = Math.sqrt (square / Math.PI);
    }
  
    get diam() {
      return this.diameter;
    }
  
    S(diameter) {
        console.log (Math.PI * (this.radius ** 2)); 

    }
  
    length(radius) {
      console.log(2 * Math.PI * this.radius);
    }
  }
  
  let circle = new Сircle(4, 8);
  console.log(circle.rad, circle.diam, circle.S, circle.length);
  circle.S();
  circle.length();