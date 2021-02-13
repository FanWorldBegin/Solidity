//node deploy.js                
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require('./compile');
//MetaMask
const mnemonicPhrase = "alert auction keen brave paddle gravity orbit arrest weekend cabin lift bachelor";
let provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase
	},
	// 我们需要连接的网络 infura
  providerOrUrl: "https://rinkeby.infura.io/v3/04fed318ed0c4f44bbd699674cfdde38"
});

//It's going to pass it to the Web through the constructor and we're going to get out in the instance of web3
const web3 = new Web3(provider);

// 为了使用 deploy
const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account: ', accounts[0])
	
	const myContract = await new web3.eth.Contract(abi)

	const contractResult = await myContract.deploy({
		data: evm.bytecode.object,
		arguments: [web3.utils.stringToHex('hi')] // 初始化参数 hi
	}).send({ from: accounts[0], gas: '1000000', }); // 发送到网路

	console.log('Contract deployed to', contractResult.options.address)
}

deploy()