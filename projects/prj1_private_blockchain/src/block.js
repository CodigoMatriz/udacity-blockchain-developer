/**
 *                          Block class
 *  The Block class is a main component into any Blockchain platform,
 *  it will store the data and act as a dataset for your application.
 *  The class will expose a method to validate the data... The body of
 *  the block will contain an Object that contain the data to be stored,
 *  the data should be stored encoded.
 *  All the exposed methods should return a Promise to allow all the methods
 *  run asynchronous.
 */

const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {
    constructor(data) {
        this.hash = null; // Hash of the block
        this.height = 0; // Block Height (consecutive number of each block)
        this.body = Buffer.from(JSON.stringify(data)).toString('hex'); // Will contain the transactions stored in the block, by default it will encode the data
        this.time = 0; // Timestamp for the Block creation
        this.previousBlockHash = null; // Reference to the previous Block Hash
    }

    /**
     * Validate if the block has been tampered
     *
     * @returns {Error|boolean} Returns true on valid and Error on invalid
     * */
    validate() {
        const self = this;
        return new Promise((resolve, reject) => {
            const blockHash = self.hash;
            const calculatedBlockHash = SHA256(JSON.stringify(this)).toString();

            if (blockHash === calculatedBlockHash) {
                resolve(true);
            } else {
                reject(new Error(false));
            }
        });
    }

    /**
     * Returns non genesis block decoded body
     *
     * @returns {(Error|object)} Decoded JSON object of the body
     * */
    getBData() {
        const encodedBlockBody = this.body;
        const decodedBlockBodyJson = hex2ascii(encodedBlockBody);
        const blockBody = JSON.parse(decodedBlockBodyJson);

        if (this.height === 0) {
            return new Error('No data for genesis block');
        }

        return blockBody;
    }
}

module.exports.Block = Block; // Exposing the Block class as a module
