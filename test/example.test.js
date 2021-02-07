const assert = require('assert');
const ganache = require("ganache-core");
const Web3 = require('web3')
// 创建实例 链接到local test network
const web3 = new Web3(ganache.provider());

