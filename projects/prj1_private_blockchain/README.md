<div align="center">
<h2>Project Specification</h2>
<h3>Create Your Own Private Blockchain</h3>
</div>
**Complete unfinished block.js implementation**

| Criteria                                                     | Meets Specifications                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Modify the `validate()` function to validate if the block has been tampered or not. | - Return a new promise to allow the method be called asynchronous.<br />- Create an auxiliary variable and store the current hash of the block in it (this represent the block object)<br />- Recalculate the hash of the entire block (Use SHA256 from crypto-js library)<br />- Compare if the auxiliary hash value is different from the calculated one.<br />- Resolve true or false depending if it is valid or not. |
| Modify the `getBData()` function to return the block body (decoding the data) | - Use hex2ascii module to decode the data<br />- Because data is a javascript object use JSON.parse(string) to get the Javascript Object<br /><br />**Resolve with the data and make sure that you don't need to return the data for the genesis block OR reject with an error.** |

**Complete unfinished blockchain.js implementation**

| Criteria                                                     | Meets Specifications                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Modify the `_addBlock(block)` function to store a block in the chain | - Must return a Promise that will resolve with the block added OR reject if an error happen during the execution.<br />- height must be checked to assign the previousBlockHash<br />    - Assign the timestamp & the correct height<br />    - Create the block hash and push the block into the chain array.<br />    Don't for get to update the `this.height` |
| Modify `requestMessageOwnershipVerification(address)` to allow you to request a message that you will use to sign it with your Bitcoin Wallet (Electrum or Bitcoin Core) | - must return a Promise that will resolve with the message to be signed |
| Modify `submitStar(address, message, signature, star)'`function to register a new Block with the star object into the chain | - must resolve with the Block added or reject with an error.<br />- time elapsed between when the message was sent and the current time must be less that 5 minutes<br />- must verify the message with wallet address and signature: bitcoinMessage.verify(message, address, signature)<br />- must create the block and add it to the chain if verification is valid |
| Modify the `getBlockHeight(hash)` function to retrieve a Block based on the hash parameter | - must return a Promise that will resolve with the Block     |
| Modify the `getStarsByWalletAddress (address)` function to return an array of Stars from an owners collection | - must return a Promise that will resolve with an array of the owner address' Stars from the chain |
| Modify the `validateChain()` function                        | - must return a Promise that will resolve with the list of errors when validating the chain<br />- must validate each block using validateBlock()<br />- Each Block should check with the previousBlockHash<br />- execute the `validateChain()` function every time a block is added<br />- create an endpoint that will trigger the execution of `validateChain()` |

**Test your App functionality**

| Criteria                                                     | Meets Specifications                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Use **POSTMAN** or similar service to test your blockchains endpoints and send screenshots of each call | - must use a GET call to request the Genesis block<br />- must use a POST call to `requestValidation`<br />- must sign message with your wallet<br />- must submit your Star<br />- must use GET call to retrieve starts owned by a particular address |

---

<div align="center">
<h3>Screenshots</h3>
<img src="./screenshots/block_by_height_genesis.png" width="640" />
</div>