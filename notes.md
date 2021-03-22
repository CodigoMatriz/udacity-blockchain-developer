> Blockchain Developer
> Udacity Nanodegree

# Blockchain Fundamentals

## Lesson 1: Blockchain Basics

> Blockchain
> Shared database that contains a list of transactions

> Hash
> A unique fingerprint for information

### Blockchain Framework

![Blockcahin Framework](./assets/blockchain_framework.png)

### Financial Transactions

#### Current State of Financial Transactions

Trading, by giving value to something, but makes it difficult to agree on its value.

Find something with intrinsic value like gold, where the value of an item can be agreed upon to how much gold it's worth. This could be further evolved by creating a currency like money in place of the gold.

Banks manage the transactions we are making with our money. These establishments are known as a **trusted 3rd party**.

> Trusted 3rd Party
> Entity that facilitates interactions between two parties

These establishments help in securely storing our money and managing our transactions. Many systems are in place to make this happen but a key one is a **ledger**

> Ledger
> List of transaction records

Keeping track of who paid whom and who has what, to help prevent **double spending**

> Double Spending
> When comeone spends the same money more than once

#### Problems

Banks having our transaction data is crucial, but is it ideal to have that much control of the data?

Let's remove the bank ledger and implement a shared ledger where everyone has access and have complete control over their own data.

---

Delayed transaction times and fees when transferring money through different services that need to communicate with the banks.

Blockchain could solve all this, but it's all a **WORK IN PROGRESS**

### Introduction to Bitcoin

#### What is Bitcoin?

Blockchain started with the first implementation of a new currency; **Bitcoin**

> Bitcoin
> A digital currency that utilizes the blockchain to facilitate financial transactions

Uses the idea of **blocks** to store and validate transactions.

> Block
> Groups of transactions bundled together

Bitcoin was not the first to group, validate and link documents. Starts around 1991, when Haber and Stornetta released their research paper [How to Time-Stamp a Digital Document](https://www.anf.es/pdf/Haber_Stornetta.pdf)

The research proposed to timestamp a document and linking it to the previous document to create a chain of validated documents.

In 2008, Satoshi Nakamoto, published a **whitepaper** detailing the foundation of Bitcoin; [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf).

> Whitepaper
> A guide that informs readers concisely about a complex issue and presents understanding on an issue, solving problem or making a decision

January 3, 2009: Nakamoto released the Bitcoin software.

After Bitcoin came about was the realization of the potential in the blockchain.1

### Hashing

> Hash Value
> A digital fingerprint for information

A unique string of letters and numbers that represent a set of data, which can be generated through a **hashing function**

> Hashing Function
> Maps a group of data to a unique hash value

Hash value acts as a unique identifier for the original data. Allows to easily identify data by referencing its hash value.

![Hashing](./assets/hashing.png)

A unique value is given to each block on the blockchain to create a unique identifier for each block that exists in the chain.

Allows to reference a block by its hash value and create the foundation in how blocks are chained.

Tool: [Ander's | SHA256 Hash](https://andersbrownworth.com/blockchain/hash)
Exercise: [Practice Hashing](./exercises/hashing)

### Blocks

Fundamental componenets of the blockchain.

> Block
> A container that holds a list of transactions to be added to the blockchain

> Blockhain
> Shared digital ledger that records a list of transactions

#### Transactions

Without the blocks, which compartmentalize the transactions, it would create a massive list of transactions that would be difficult to work with or manage.

<figure>
<img src="./assets/transactions_list.png" align="center" />
<figcaption align="center">Transaction list without blocks</figcaption>
</figure>

<figure>
<img src="./assets/transactions_blocks.png" align="center" />
<figcaption align="center">Transaction list separated into blocks</figcaption>
</figure>

With the transactions broken out into blocks, it makes it easier to manage, with transactions held in the *body of a block*

#### Block Header

Additional information is stored in the block as well, this is at the _block header_ which details the structure of the data within

![Transaction List](./assets/block_header.png)

##### Previous Block's Hash
hash of the block before the current one. Allows the blocks to be linked together by knowing what came before / after

![Previous Block's Hash](./assets/block_previous_hash.png)

---

##### Time
when the block was created, which helps in avoidining double-spending and validates which block came first

![Time](./assets/block_time.png)

---

##### Merkle Root
hash that represents every transaction inside the block, which is derived from pairs of the transactions insde the block repeatedly hashed together.

Each pair results in a hash which is hashed repeatedly until a single hash value is generated.

![Merkle Root](./assets/block_merkle_root.png)

---

##### Nonce
related more towards mining. An arbitrary value that can only be used once. 

When a hash is created for a block, a very specific value is required that starts with a set number of zeros that determines the hash's difficulty to find.

Requiring all the block data and the nonce to get the hash value, which the computer does over and over until the appropriate hash is found.

![None](./assets/block_nonce.png)

---

#### Block Difficulty

A block's difficulty is determined by the amound of zeros prepended to the hash More zeros increases the diffilculty while less does the reverse.

![Block Diffilculty](./assets/block_difficulty.png)

#### Block Size

This is the amount of data it takes to the block fill up before a new one needs to be created. Block size affects all the blocks in the blockchain and is determined by the developer, thus requiring an update to the software to change the block size value.

![Block Size](./assets/block_size.png)

#### Block Hash

A unique digital fingerprint that is derived from the block's data being passed through a SHA256 algorithm. If any of the data changes within the block, a new hash would be derived, allowing to determine if the block's data was tampered.

![Block Hash](./assets/block_hash.png)

Tool: [Ander's | Block](https://andersbrownworth.com/blockchain/block)
Exercise: [Practice Block](./exercises/block)

### Blockchain

The place where data is stored; every other component is the system around the blockchain that makes it all work.

> Blockchain
> Digital ledger that contains the entire history of transactions made on the network

**All of the information on the blockchain is permanent and cannot be changed**

The blockchain is constructed of two main things, blocks and hash values.

![Blockchain](./assets/blockchain.png)

#### Invalidation 
If data is changed in a block, that block will be invalidated along with any blocks that succeed it and thus breaking the blockchain.

![Blockchain Invalidation](./assets/blockchain_invalid_block.png)

#### Genesis Block
The first block in the blockchain is called the **genesis block**

![Blockchain Invalidation](./assets/blockchain_genesis_block.png)

Tool: [Ander's | Blockchain](https://andersbrownworth.com/blockchain/blockchain)

### Distributed Peer-to-Peer Network

> Peer-to-Peer Network
> A network of computers that allows information to be shared across users

Allows users, known as a nodes, to send information directly among each other without a centralized service.

![Peer-to-Peer](./assets/network_peer_peer.png)

> Distributed Network
> A network that allows information to spread out across many users

With peer-to-peer allowing users to send information among each other, being distributed also allows the user to own the information as well.

#### Types

![Network Types](./assets/network_types.png)

##### Centralized
Everything connects to a single central owner, which creates a single point of failure as well.

##### Decentralized
Instead of a single point, it is now spread across multiple points.

##### Distributed
Decentalization at the maximum, now every user on the network has the same access and ownership

**Blockchain is a distributed peer-to-peer network where everyone downloads a copy of the blockchain on their computer**

### Memory Pool
This is where transactions reside before going on the blockchain or becoming part of the network, also knows as the **mempool**

As the number of transactions being made exceed what the network can process a queue is created.

> Mempool
> Waiing place for all unconfirmed transactions before they are added to the blockchain

Transactions are not instant, as they need to be confirmed by the network and are done so by specialized nodes in the network called miners. Miners pull from the mempool to validate transactions before they are added to the blockchain to keep consensus.

![Miners](./assets/mempool_miners.png)

Transactions in the mempool could be evicted due to:
* expiration by timeout (14 days after entering)
* being at the bottom of the mempool by fee size when capacity is reached and a new higher-fee transaction is accepted
* being added to the block
* the transaction or an unconfirmed acestor conflicts with the transaction included in the block

A transaction confirmation is the number of times another **block** or **transaction** is placed chronologically after your **transaction’s block**.

Added to the block the first time, is equivalent to one confirmation. Another block succesfully added chronoligcally is two confirmations, the next three confirmations and so on. 

A transaction is considered safe after six confirmations.

#### Resources
[Blockchain.com](https://www.blockchain.com/about/index.html)

* [Unconfirmed Transactions](https://blockchain.com/unconfirmed-transactions)
* [Blockchain Data Charts](https://blockchain.com/charts)

[Blockchain Visuals](https://bitcoinvisuals.com/stats)

### Consensus

> Concensus
> How the network reaches agreement about which transactions are most trustworthy

#### Byzantine Generals' Problem
a situation where spread out nodes need to coordinate their behavior or action but cannot trust each other to get organized

Additional Reading: [What is the Byzantine Generals Problem? | CoinCentral](https://coincentral.com/byzantine-generals-problem/)

#### Proof of Work
whoever puts in the most work to contribute to the system is the most trustworthy

> Proof of Work
> System where information can be costly to produce, but easy to verify

Each node (miner) is involved in solving a problem to proof they've done required work. 

In response to putting in work via time and resources, each node (miner) is paid transaction fees directly from those making the transactions as well from the technology as a reward for mining the new block.

![Proof of Work](./assets/proof_work_nodes.png)

Miner's purpose is finding the nonce for the new block, which is the key to finding the blocks hash value. 

**Block Data + Nonce = Hash Value**

In Bitcoin, the difficulty is adjusted automatically so that a block is generated every 10 minutes.

![Bitcoin Difficulty](./assets/bitcoin_difficulty.png)

##### Issues
Extremely High-Energy Consumption

![Bitcoin Energy Consumption](./assets/bitcoin_energy_consumption.png)

Monopoly of miners leads to concern for Centralization

Those with resources to acquire more equipment will have an unfair advantage.
Mining pools/farms have helped in leading a monopoly of the miners that control a majority of the network and as they dedicate more nodes to the network they have more say in what blocks are considered valid thus leaning to a more centralized system than distributed.

![Bitcoin Mining Pools](./assets/bitcoin_mining_pools.png)

#### Proof of Stake
Focuses on giving votes to members, depending on how much stake they have in the success of the chain.

> Proof of Stake
> Seeks to achieve consensus by giving votes to those with stake in the system

##### How does it work?
There are no miners, there are validators. Validators do not need to invest in computing equipment to mine the blocks that create coins, all the coins exist from the outset.

Purpose of the validators, known as stakeholders, validate which blocks make it onto the blockchain.

The greater the fraction of the total coins a validator owns, they have a higher chance to be picked to create the next block, as that emphasizes a higher stake.

![Proof of Stake | How does it work?](./assets/proof_stake_work.png)

If a validator's block is added to the blockchain, they are awarded coins proportional to the amount of their stake.

##### Potential Issues
"Nothing at Stake" Problem

Blockchains can fork, accidentally or by a malicious attempt to reverse a transaction. So with these multiple competing block options, couldn't a malicious validator stake into every block so they always profit?

![Proof of Stake | How does it work?](./assets/proof_stake_issues.png)

##### Strategies

It is a possibility, but strategies have been added in place against these types of attacks.

The slasher strategy penalizes validators for simultaneaously creating blocks across multiple chains.

The punisher strategy, well, punishes validators for creating a block on the wrong chain. Validators must be selective and conscious of which blockchain they add their stakes.

##### Resources
[Ethereum's Proof of Stake FAQs](https://eth.wiki/en/concepts/proof-of-stake-faqs)

#### Delegated Byzantine Fault Tolerance (DBFT)