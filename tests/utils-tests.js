/* global describe it */
const { expect } = require("chai");
const {
  randomInt,
  selectRandomListItem,
  getRandomRoute
} = require("../src/renderer/utils");

// Testing RNG is really annoying,
// so I guess we just run a bunch of cases and hope for the best
// We're not really testing the randomness,
// just that the code works as expected
describe("randomInt", () => {
  it("should return an integer", () => {
    const i = randomInt();
    expect(Number.isInteger(i)).to.be.true;
  });

  it("shouldn't exceed or equal max", () => {
    const max = 2;
    const cases = 100;
    for (let i = 0; i < cases; i++) {
      const i = randomInt(max);
      expect(i).to.be.lessThan(max);
    }
  });

  it("should default max to 2", () => {
    const max = 2;
    const cases = 100;
    for (let i = 0; i < cases; i++) {
      const i = randomInt();
      expect(i).to.be.lessThan(max);
    }
  });
});

describe("selectRandomListItem", () => {
  const list = ["Item1", "Item2", "Item3"];

  it("should return an item from the chosen list", () => {
    const item = selectRandomListItem(list);
    expect(list.includes(item)).to.be.true;
  });

  it("should exclude items specified in the exclude list", () => {
    const excludes = ["Item2", "Item3"];
    const expected = "Item1";
    const cases = 100;
    for (let i = 0; i < cases; i++) {
      const item = selectRandomListItem(list, ...excludes);
      expect(item).to.equal(expected);
    }
  });
});

describe("getRandomRoute", () => {
  it("should contain a direction", () => {
    const { direction } = getRandomRoute();
    expect(direction).to.be.a("string");
  });

  it("should contain a stair1 staircase", () => {
    const { stair1 } = getRandomRoute();
    expect(stair1).to.be.a("string");
  });

  it("should contain a stair2 staircase", () => {
    const { stair2 } = getRandomRoute();
    expect(stair2).to.be.a("string");
  });

  it("should never have matching staircases", () => {
    const cases = 100;
    for (let i = 0; i < cases; i++) {
      const { stair1, stair2 } = getRandomRoute();
      expect(stair1).to.not.equal(stair2);
    }
  });
});
