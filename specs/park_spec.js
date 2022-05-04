const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let dino1
  let dino2
  let dino3
  let dino4
  let dino5
  let dino6

  beforeEach(function () {
    park = new Park("Jurassic World", 100)
    dino1 = new Dinosaur("T-Rex", "Carnivore", 200)
    dino2 = new Dinosaur("Triceratops", "Herbivore", 80) 
    dino3 = new Dinosaur("Velociraptor", "Carnivore", 100) 
    dino4 = new Dinosaur("Diplodocus", "Herbivore", 140) 
    dino5 = new Dinosaur("Spinosaurus", "Carnivore", 180) 
    dino6 = new Dinosaur("Ankylosaurus", "Herbivore", 130) 
  })

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, "Jurassic World")
  })

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 100)
  })

  it('should have a collection of dinosaurs', function () {
    const actual = park.getDinos()
    assert.deepStrictEqual(actual, 0)
  });
// could also do it this way which is simpler, just return the list like you returned the name above
// it('should have a collection of dinosaurs', function () {
//     const actual = park.dinosaurs;
//     assert.deepStrictEqual(actual, []);
//   });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino1)
    const actual = park.getDinos()
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(dino1)
    const actual = park.getDinos()
    assert.strictEqual(actual, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    const actual = park.whoAttractsMost()
    assert.strictEqual(actual, 200)
  })

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    park.addDino(dino4)
    park.addDino(dino5)
    park.addDino(dino6)
    const actual = park.findBySpecies('T-Rex')
    assert.deepEqual(actual, ['T-Rex'])
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    const actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual, 380)
  });


  it('should be able to calculate the total number of visitors per year', function () {
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    const actual = park.totalVisitorsPerYear()
    assert.strictEqual(actual, 138700)
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    const actual = park.totalAnnualRevenue()
    assert.strictEqual(actual, 13870000)
  });


  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    park.addDino(dino4)
    park.addDino(dino5)
    park.addDino(dino6)
    park.removeBySpecies('T-Rex')
    const actual = park.getDinos()
    assert.deepStrictEqual(actual, 5)
  })

  // it('should be able to calculate number of dinosaurs for each diet type', function () {
  //   park.add(trex1);
  //   park.add(trex2);
  //   park.add(trex3);
  //   park.add(velociraptor1);
  //   park.add(velociraptor2);
  //   park.add(diplodocus);
  //   park.add(gallimimus);
  //   const actual = park.numberOfDinosaursByDiet();
  //   const expected = { carnivore: 5, herbivore: 1, omnivore: 1 };
  //   assert.deepStrictEqual(actual, expected);
  // });


})