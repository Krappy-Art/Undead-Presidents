const UndeadPresidents = artifacts.require("UndeadPresidents.sol");

module.exports = function (deployer) {
  deployer.deploy(UndeadPresidents, "https://krappyart.herokuapp.com/undeadpresidents/");
};
