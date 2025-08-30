// 브리지
class Shape { constructor(color){ this.color = color; } }
class Circle extends Shape { draw(){ return `Circle in ${this.color.paint()}`; } }
class Red { paint(){ return 'red'; } }
class Blue { paint(){ return 'blue'; } }
console.log(new Circle(new Red()).draw());
