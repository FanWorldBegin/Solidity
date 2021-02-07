// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <=0.8.0;

/** 
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */

contract InBox {
    uint storedData; // declares a state variable called storedData of type uint (unsigned integer of 256 bits)
    address public minter;
    bytes32 public message;

    function setMessage(bytes32 _message) public {
        message = _message;
    }

    function get() public view returns (uint) {
        return storedData;
    }
    
    // 做一些运算
    function doMath(uint a, uint b) public pure {
        a + b;
        b - a;
        a * b;
        a = b;
        
        
    }
    
    // Constructor code is only run when the contract
    // is created
    constructor(bytes32 _message) {
        minter = msg.sender;
        message = _message;
    }
}