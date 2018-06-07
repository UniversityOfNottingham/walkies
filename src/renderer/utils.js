const { config } = require("../package");

const randomInt = max => Math.floor(Math.random() * Math.floor(max || 2));

const setElementValue = (id, value) =>
  (document.getElementById(id).innerHTML = value);

const selectRandomListItem = (list, ...exclude) =>
  list.filter(x => !exclude.includes(x))[
    randomInt(list.length - exclude.length)
  ];

const getRandomRoute = () => {
  const stair1 = selectRandomListItem(config.staircases);

  return {
    direction: selectRandomListItem(config.directions),
    stair1,
    stair2: selectRandomListItem(config.staircases, stair1)
  };
};

module.exports = {
  randomInt,
  setElementValue,
  selectRandomListItem,
  getRandomRoute
};
