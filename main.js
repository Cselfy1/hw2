// 1
const Car = {
    manufacacturer: "Audi",
    model: "RSQ 8",
    year: "2024",
    avgSpeed: "200km/h",

    info: function() 
    {
        let info = `Manufacturer: ${this.manufacacturer}, Model: ${this.model}, Year: ${this.year}, Avg Speed: ${this.avgSpeed}`;
        return info;
    },
    time: function() 
    {
        let distance = +prompt("Enter the distance: ");
        let avgSpeed = parseFloat(this.avgSpeed);
        let time = distance / avgSpeed;
        let restTime = Math.floor(time / 4);
        let totalTime = time + restTime;
        return totalTime;
    }
};

//2 
const Fraction = {
    create: function(numerator, denominator) {
        return { numerator, denominator };
    },
    add: function(fraction1, fraction2) {
        let numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
        let denominator = fraction1.denominator * fraction2.denominator;
        return this.reduce(this.create(numerator, denominator));
    },
    subtract: function(fraction1, fraction2) {
        let numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
        let denominator = fraction1.denominator * fraction2.denominator;
        return this.reduce(this.create(numerator, denominator));
    },
    multiply: function(fraction1, fraction2) {
        let numerator = fraction1.numerator * fraction2.numerator;
        let denominator = fraction1.denominator * fraction2.denominator;
        return this.reduce(this.create(numerator, denominator));
    },
    divide: function(fraction1, fraction2) {
        let numerator = fraction1.numerator * fraction2.denominator;
        let denominator = fraction1.denominator * fraction2.numerator;
        return this.reduce(this.create(numerator, denominator));
    },
    reduce: function(fraction) {
        let gcd = function(a, b) {
            return b ? gcd(b, a % b) : a;
        };
        let gcdValue = gcd(fraction.numerator, fraction.denominator);
        return this.create(fraction.numerator / gcdValue, fraction.denominator / gcdValue);
    }
};

// output: 
// let fraction1 = Fraction.create(1, 2);
// let fraction2 = Fraction.create(1, 3);

// let sum = Fraction.add(fraction1, fraction2);
// let difference = Fraction.subtract(fraction1, fraction2);
// let product = Fraction.multiply(fraction1, fraction2);
// let quotient = Fraction.divide(fraction1, fraction2);

// console.log(`Sum: ${sum.numerator}/${sum.denominator}`);
// console.log(`Difference: ${difference.numerator}/${difference.denominator}`);
// console.log(`Product: ${product.numerator}/${product.denominator}`);
// console.log(`Quotient: ${quotient.numerator}/${quotient.denominator}`);

//3
const Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    display: function() {
        return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
    },
    addSeconds: function(seconds) {
        this.seconds += seconds;
        this.minutes += Math.floor(this.seconds / 60);
        this.seconds = this.seconds % 60;
        this.hours += Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;
        this.hours = this.hours % 24;
    },
    addMinutes: function(minutes) {
        this.addSeconds(minutes * 60);
    },
    addHours: function(hours) {
        this.addSeconds(hours * 3600);
    }
};

Time.hours = 20;
Time.minutes = 30;
Time.seconds = 45;

console.log(Time.display()); // "20:30:45"
Time.addSeconds(30);
console.log(Time.display()); // "20:31:15"  
Time.addMinutes(30);
console.log(Time.display()); // "21:01:15"
Time.addHours(3);
console.log(Time.display()); // "00:01:15"