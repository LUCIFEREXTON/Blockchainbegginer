const sha256 = require('sha256')

function Blockchain() {
    this.chain = []
    this.pendingtransaction = []
    this.createNewBlock(3088, '', '')
}

Blockchain.prototype.createNewBlock = function(nonce, prehash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        transactions: this.pendingtransaction,
        timestamp: Date.now(),
        nonce,
        hash,
        prehash
    }
    this.pendingtransaction = []
    this.chain.push(newBlock)
    return newBlock
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1]
}

Blockchain.prototype.createNewTransaction = function(amount, sender, reciever) {

    const newTransaction = {
        amount,
        sender,
        reciever
    }
    this.pendingtransaction.push(newTransaction)
    return this.getLastBlock()['index'] + 1
}

Blockchain.prototype.hashBlock = function(nonce, prehash, blockdata) {
    const dataString = nonce + prehash + JSON.stringify(blockdata)
    const hash = sha256(dataString)
    return hash;
}

Blockchain.prototype.proofOfWork = function(prehash, blockdata) {
    let nonce = 0;
    let hash = this.hashBlock(nonce, prehash, blockdata)
    while (hash.substring(0, 4) != '0000') {
        nonce++
        hash = this.hashBlock(nonce, prehash, blockdata)
        console.log(hash)
    }
    return nonce
}

module.exports = Blockchain