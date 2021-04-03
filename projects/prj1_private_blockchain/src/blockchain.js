/**
 *                          Blockchain Class
 *  The Blockchain class contain the basics functions to create your own private blockchain
 *  It uses libraries like `crypto-js` to create the hashes for each block and `bitcoinjs-message`
 *  to verify a message signature. The chain is stored in the array
 *  `this.chain = [];`. Of course each time you run the application the chain will be empty because and array
 *  isn't a persisten storage method.
 *
 */

const SHA256 = require('crypto-js/sha256');
const bitcoinMessage = require('bitcoinjs-message');
const BlockClass = require('./block.js');

class Blockchain {
    /**
     * Constructor of the class, you will need to setup your chain array and the height
     * of your chain (the length of your chain array).
     * Also everytime you create a Blockchain class you will need to initialized the chain creating
     * the Genesis Block.
     * The methods in this class will always return a Promise to allow client applications or
     * other backends to call asynchronous functions.
     */
    constructor() {
        this.chain = [];
        this.height = -1;
        this.initializeChain();
    }

    /**
     * This method will check for the height of the chain and if there isn't a Genesis Block it will create it.
     * You should use the `addBlock(block)` to create the Genesis Block
     * Passing as a data `{data: 'Genesis Block'}`
     */
    async initializeChain() {
        if (this.height === -1) {
            const block = new BlockClass.Block({ data: 'Genesis Block' });
            this._addBlock(block);
        }
    }

    /**
     * Utility method to return the chain height
     *
     * @returns {Promise} The chain height
     */
    getChainHeight() {
        return new Promise((resolve) => {
            resolve(this.height);
        });
    }

    /**
     * Adds a block to the chain
     *
     * @param {BlockClass} block A block to be added to the blockchain
     *
     * @returns {(BlockClass|Error)} The newly added block to the chain
     */
    _addBlock(block) {
        const self = this;
        const newBlock = block;

        return self.getChainHeight().then((height) => {
            return new Promise((resolve, reject) => {
                newBlock.height = height + 1;
                newBlock.time = new Date().getTime().toString().slice(0, -3);

                if (newBlock.height > 0) {
                    newBlock.previousBlockHash = self.chain[height].hash;
                }

                newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();

                self.chain.push(newBlock);
                self.height = newBlock.height;

                self.validateChain().then((response) => {
                    if (response !== true) {
                        reject(response);
                    }

                    resolve(newBlock);
                });
            });
        });
    }

    /**
     * Will allow you to request a message that you will use to
     * sign it with your Bitcoin Wallet (Electrum or Bitcoin Core)
     *
     * @param {string} address Wallet address used to sign the message
     *
     * @returns {Promise} Message to be signed
     */
    requestMessageOwnershipVerification(address) {
        return new Promise((resolve) => {
            resolve(`${address}:${new Date().getTime().toString().slice(0, -3)}:starRegistry`);
        });
    }

    /**
     * Allows users to submit their star to the blockchain
     *
     * @param {string} address User's wallet address
     * @param {string} message User's message
     * @param {string} signature User's signature
     * @param {object} star User's star to add to the blockchain
     *
     * @returns {BlockClass|Error} Resolve with block added
     */
    submitStar(address, message, signature, star) {
        const self = this;
        return new Promise((resolve, reject) => {
            const messageTime = parseInt(message.split(':')[1], 10);
            const currentTime = parseInt(new Date().getTime().toString().slice(0, -3), 10);
            const elapsedTime = currentTime - messageTime;

            if (elapsedTime < 300 && bitcoinMessage.verify(message, address, signature)) {
                const block = new BlockClass.Block({
                    owner: address,
                    star,
                });
                resolve(
                    self._addBlock(block).then((addedBlock) => {
                        return addedBlock;
                    }),
                );
            } else {
                reject(new Error('Error submitting star'));
            }
        });
    }

    /**
     * Search on the chain array for the block that has the hash.
     *
     * @param {string} hash Block hash to lookup
     *
     * @returns {(object|null)} The block with the matching hash
     */
    getBlockByHash(hash) {
        const self = this;
        return new Promise((resolve) => {
            const block = self.chain.filter((b) => b.hash === hash)[0];

            if (block) {
                resolve(block);
            } else {
                resolve(null);
            }
        });
    }

    /**
     * Search on the chain array for the block that has the matching height.
     *
     * @param {number} height Height of the block being looked up
     *
     * @returns {(object|null)} Block at the given height
     */
    getBlockByHeight(height) {
        const self = this;
        return new Promise((resolve) => {
            const block = self.chain.filter((p) => p.height === height)[0];
            if (block) {
                resolve(block);
            } else {
                resolve(null);
            }
        });
    }

    /**
     * Search on the chain array for the blocks that match the address and return the decoded stars array.
     *
     * @param {string} address Wallet address to lookup in the chain
     *
     * @returns {Array} Array of stars that belong to the wallet address
     */
    getStarsByWalletAddress(address) {
        const self = this;
        const stars = [];

        return new Promise((resolve) => {
            const blocks = self.chain;

            blocks.forEach((block) => {
                if (block.getBData().owner === address) {
                    stars.push(block.getBData());
                }
            });

            resolve(stars);
        });
    }

    /**
     * This method will return a Promise that will resolve with the list of errors when validating the chain.
     * Steps to validate:
     * 1. You should validate each block using `validateBlock`
     * 2. Each Block should check the with the previousBlockHash
     */
    validateChain() {
        const self = this;
        const errorLog = [];

        return new Promise((resolve) => {
            const blocks = self.chain;

            blocks.forEach((block) => {
                if (block.height > 0) {
                    if (blocks[block.height - 1].hash !== block.previousBlockHash) {
                        errorLog.push(
                            `[HEIGHT ${block.height}] Block has a previousBlockHash mismatch`,
                        );
                    }
                }

                block.validate().catch(() => {
                    errorLog.push(`[HEIGHT ${block.height}] Block has been tampered`);
                });
            });

            if (errorLog.length > 0) {
                resolve(errorLog);
            } else {
                resolve(true);
            }
        });
    }
}

module.exports.Blockchain = Blockchain;
