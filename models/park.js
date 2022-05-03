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


module.exports = Park 

