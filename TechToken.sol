// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract TechToken is ERC20, Ownable {

    address burnerRole;

    constructor () ERC20("TechToken", "TECH") public {
        // mint fixed supply of 1 billion tokens having 18 decimals
        _mint(msg.sender, 1_000_000_000 * (10 ** uint256(decimals())));
        burnerRole = msg.sender;
    }

    function burn(uint256 burnAmount) external {
        require(msg.sender == burnerRole, "TechToken: burnerRole required");
        _burn(msg.sender, burnAmount);
    }

    function changeBurnerRole(address newBurnerRole) onlyOwner external {
        require(newBurnerRole != address(0), "TechToken: new burnerRole is the zero address");
        burnerRole = newBurnerRole;
    }
}