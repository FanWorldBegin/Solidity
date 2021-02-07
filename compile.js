const path = require('path');
const solc = require('solc');
const fs = require('fs-extra')

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, 'utf8')

// console.log(solc.compile(source, 1))



var input = {
  language: 'Solidity',
  sources: {
    'inbox.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log(output.contracts)
// `output` here contains the JSON output as specified in the documentation

// for (var contractName in output.contracts['inbox.sol']) {
//   console.log(
//     contractName +
//       ': ' +
//       output.contracts['inbox.sol'][contractName].evm.bytecode.object
//   );
// }

// console.log(output.contracts['inbox.sol'].InBox);

//导出
module.exports =  output.contracts['inbox.sol'].InBox;