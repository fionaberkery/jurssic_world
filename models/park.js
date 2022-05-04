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
    for (const dinosaur of this.dinosaurs)
    {
        dinosAtPark.push(dinosaur.guestsAttractedPerDay)
    }
    dinosAtPark.sort(function(a, b){return a-b})
    return dinosAtPark[2]
}
// a much easier way of doing the above
// Park.prototype.findMostAttractiveDinosaur = function () {
//     let mostAttractiveDino = this.dinosaurs[0];

//     for (const dino of this.dinosaurs) {
//       if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay) {
//         mostAttractiveDino = dino;
//       }
//     }



Park.prototype.findBySpecies = function (species) {
    const foundDinos = []
    for (const dinosaur of this.dinosaurs)
    {
        if (dinosaur.species === species) 
        {
            foundDinos.push(dinosaur.species)
        } 
    }
    return foundDinos
}


Park.prototype.totalVisitorsPerDay = function () {
    let total = 0
    for (const dinosaur of this.dinosaurs)
    {
        total += dinosaur.guestsAttractedPerDay
    }
    return total 
}

Park.prototype.totalVisitorsPerYear = function () {
    let total = 0
    for (const dinosaur of this.dinosaurs)
    {
        total += dinosaur.guestsAttractedPerDay
    }
    return total * 365
}
// could just do this...
// return this.totalVisitorsPerDay() * 365


Park.prototype.totalAnnualRevenue = function () {
    return this.totalVisitorsPerYear() * this.ticketPrice 
}

Park.prototype.removeBySpecies = function (species) {
    const newDinosaurs = []

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species !== species) {
        newDinosaurs.push(dinosaur);
    }
    }

    this.dinosaurs = newDinosaurs;
}


// Park.prototype.numberOfDinosaursByDiet = function () {
//     const numberOfDinosaursByDiet = {};

//     for (const dinosaur of this.dinosaurs) {
//       if (numberOfDinosaursByDiet[dinosaur.diet]) {
//         numberOfDinosaursByDiet[dinosaur.diet] += 1;
//       }
//       else {
//         numberOfDinosaursByDiet[dinosaur.diet] = 1;
//       }
//     }

//     return numberOfDinosaursByDiet;
//   }




module.exports = Park 

