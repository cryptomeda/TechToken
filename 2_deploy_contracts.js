var TechToken = artifacts.require("./TechToken.sol")

module.exports = function(deployer) {
	deployer.deploy(TechToken);
};