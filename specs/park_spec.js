const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  beforeEach(function () {
    park = new Park("Jurassic World", 100)
    dino1 = new Dinosaur("T-Rex", "Carnivore", 200)
    dino2 = new Dinosaur("Triceratops", "Herbivore", 80)
    dino3 = new Dinosaur("Raptor", "Carnivore", 100)

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
    assert.deepEqual(actual, 0)
  });

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
    const actual = park.findAllCarnivores()
    assert.deepEqual(actual, ['T-Rex', 'Raptor'])
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
