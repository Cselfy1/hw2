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