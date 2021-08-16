const Blockchain = require('./blockchain')

let bitcoin = new Blockchain()

/*
bitcoin.createNewBlock(3, "EIUF4343BKN43J4334K", "SDFJ34OIJ34NLN34I");

bitcoin.createNewTransaction(100, "aaa111", "bbb111");

bitcoin.createNewBlock(3564, "EIUF4343BeuieKN43J4334K", "SDFJ3dso4OIJ34NLN34I");

bitcoin.createNewTransaction(300, "ccc111", "ddd111");

bitcoin.createNewTransaction(400, "eee111", "fff111");

bitcoin.createNewTransaction(500, "ggg111", "hhh111");
*/
console.log(bitcoin)

/*
const previousBlockHash = "KASDKSDN38938BDWNDDJ";
const currentBlockData = [{
        amount: 10,
        sender: "sdkjjns344",
        recepeint: "sdkjnsk3983"
    },
    {
        amount: 20,
        sender: "sdkjjns344",
        recepeint: "sdkjnsk3983"
    },
    {
        amount: 30,
        sender: "sdkjjns344",
        recepeint: "sdkjnsk3983"
    }
];
const nonce = 371401;

console.log(bitcoin.proofOfWork('', ''))
console.log(bitcoin.hashBlock(nonce, previousBlockHash, currentBlockData))
*/