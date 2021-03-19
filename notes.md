> Blockchain Developer
> Udacity Nanodegree

# Blockchain Developer Nanodegree

> Blockchain
> Shared database that contains a list of transactions

> Hash
> A unique fingerprint for information

## Blockchain Framework

![Blockcahin Framework](./assets/blockchain_framework.png)

## Financial Transactions

### Current State of Financial Transactions

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

### Problems

Banks having our transaction data is crucial, but is it ideal to have that much control of the data?

Let's remove the bank ledger and implement a shared ledger where everyone has access and have complete control over their own data.

---

Delayed transaction times and fees when transferring money through different services that need to communicate with the banks.

Blockchain could solve all this, but it's all a **WORK IN PROGRESS**

## Introduction to Bitcoin

### What is Bitcoin?

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

## Hashing

> Hash Value
> A digital fingerprint for information

A unique string of letters and numbers that represent a set of data, which can be generated through a **hashing function**

> Hashing Function
> Maps a group of data to a unique hash value

Hash value acts as a unique identifier for the original data. Allows to easily identify data by referencing its hash value.

![Hashing](./assets/hashing.png)

A unique value is given to each block on the blockchain to create a unique identifier for each block that exists in the chain.

Allows to reference a block by its hash value and create the foundation in how blocks are chained.

Tool: [SHA256 Hash](https://andersbrownworth.com/blockchain/hash)

## Blocks

