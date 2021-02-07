const assert = require('assert');
const ganache = require("ganache-core");
const Web3 = require('web3')
// 创建实例 链接到local test network
const web3 = new Web3(ganache.provider());

const { abi, evm } = require('../compile');


let accounts;
let inbox;

beforeEach(async () => {
	//Get a list of all account
	// use one of those accounts to deploy the contracts
	accounts = await web3.eth.getAccounts();
	myContract = await new web3.eth.Contract(abi)

	inbox = await myContract.deploy({
		data: evm.bytecode.object,
		arguments: [web3.utils.stringToHex('hi')] // 初始化参数 hi
	}).send({ from: accounts[0], gas: '1000000', });

	//console.log(inbox)
})



describe('Inbox', () => {
	it('deploys a contract', () => {
		// assert 判断传入的信息是否存在
		//console.log('inbox.options.address', inbox.options.address)
		assert.ok(inbox.options.address);
	})

	// call a method on our inbox contract.
	it('has a defult message', async() => {
		const message = await inbox.methods.message().call();
		var convertMessage = web3.utils.hexToString(message)
		assert.equal(convertMessage, 'hi');

	})
})