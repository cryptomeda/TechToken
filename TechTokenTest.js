const TechToken = artifacts.require('./TechToken.sol');

const BigNumber = require('bignumber.js');
const { assert } = require('chai');
const chai = require('chai');
const { itShouldThrow } = require('./utils');
// use default BigNumber
chai.use(require('chai-bignumber')()).should();

contract('TechToken', (accounts) => {
    let techToken;
    const cap = "1000000000000000000000000000"; // 10**9 * 10**18
    const hundredTokens = BigNumber(10).pow(18).multipliedBy(100);
    const thousandTokens = BigNumber(10).pow(18).multipliedBy(1000);
    const owner = accounts[0];
    const user = accounts[1];

    before(async () => {
        techToken = await TechToken.deployed();
    });

    describe('TechTokenTest', () => {
/*
      beforeEach(async () => {
          techToken = await TechToken.new();
      });
*/
      it('should have total supply of 1 billion', async () => {
        let myTotalSupply = await techToken.totalSupply();
        assert.equal(myTotalSupply.toString(), cap);
      });

    });
});