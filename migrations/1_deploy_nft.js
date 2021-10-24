const nft = artifacts.require("UndeadPresidents");

module.exports = async function (deployer) {
 await deployer.deploy(nft, "https://krappyart.herokuapp.com/undeadpresidents/");
};