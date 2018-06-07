const { getRandomRoute, setElementValue } = require("./utils");

// displayRandomRoute() is used globally by index.html
// eslint-disable-next-line no-unused-vars
const displayRandomRoute = () => {
  const { stair1, direction, stair2 } = getRandomRoute();

  setElementValue("stair1", stair1);
  setElementValue("direction", direction);
  setElementValue("stair2", stair2);
};

module.exports = displayRandomRoute;
