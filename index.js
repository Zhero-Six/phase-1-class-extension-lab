// index.js

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return false;
        
        const [a, b, c] = this.sides;
        // Check triangle inequality theorem: sum of any two sides > third side
        return (a + b > c) && (b + c > a) && (a + c > b);
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false;
        
        // Check if all sides are equal
        return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        // Since it's a square, any side length squared will do
        return this.sides[0] * this.sides[0];
    }
}

// Export for testing
if (typeof module !== 'undefined') {
    module.exports = { Polygon, Triangle, Square };
}