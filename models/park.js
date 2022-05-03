const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.addDino = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.getDinos = function () {
    return this.dinosaurs.length
}

Park.prototype.removeDino = function (dinosaur) {
    const findDinosaur = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(findDinosaur, 1)
}


Park.prototype.whoAttractsMost = function () {
    const dinosAtPark = []
    for (dinosaur of this.dinosaurs)
    {
        dinosAtPark.push(dinosaur.guestsAttractedPerDay)
    }
    dinosAtPark.sort(function(a, b){return a-b})
    return dinosAtPark[2]
}


Park.prototype.findAllCarnivores = function () {
    const carnivores = []
    for (dinosaur of this.dinosaurs)
    {
        if (dinosaur.diet === "Carnivore") 
        {
            carnivores.push(dinosaur.species)
        } 
    }
    return carnivores
}

Park.prototype.findAllHerbivores = function () {
    const herbivores = []
    for (dinosaur of this.dinosaurs)
    {
        if (dinosaur.diet === "Herbivore") 
        {
            herbivores.push(dinosaur.species)
        } 
    }
    return herbivores
}

Park.prototype.totalVisitorsPerDay = function () {
    let total = 0
    for (dinosaur of this.dinosaurs)
    {
        total += dinosaur.guestsAttractedPerDay
    }
    return total 
}

Park.prototype.totalVisitorsPerYear = function () {
    let total = 0
    for (dinosaur of this.dinosaurs)
    {
        total += dinosaur.guestsAttractedPerDay
    }
    return total * 365
}

Park.prototype.totalAnnualRevenue = function (totalVisitors) {
    totalRevenue = totalVisitors * this.ticketPrice
    return totalRevenue
    
}

// Park.prototype.removeAllCarnivores = function () {
    
//     for (dinosaur of this.dinosaurs)
//     {
//         if (dinosaur.diet === "Carnivore") 
//         {
//             this.removeDino(dinosaur)
//         } 
//     }
    
// }






module.exports = Park 

