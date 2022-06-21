# Hardhat Solidity Environment in Docker

This repository contains a template that you can use to develop smart contracts on Solidity. It configured to use it with Docker.


## Features

* Customized hardhat config
* Handy compilied dir (/build) with deployments, abis, artifacts and typechain
* MyEtherWallet as an interface to interact with smart contract which deployed in local hardhat node
* Hardhat shorthand for using short command (hh)


## What’s Included?

Two docker containers:

1. [Hardhat](https://hardhat.org/) environment with running local node
2. Web server with [MyEtherWallet](https://www.myetherwallet.com/) as an interface which help us to interact with smart contract


## Setup

Make sure you have install Docker

1. Git clone this repository
2. Make a copy of .env.example named .env
3. Run docker-compose up command
```bash
docker-compose up -d
```
## Usage


### Hardhat node

Hardhat node running on [localhost:8545](http://localhost:8545)


Show list currently running docker containers

```bash
docker ps
```

Find a hardhat container and copy container id

Enter the hardhat container

```bash
docker exec -it <container-id> bash
```

Inside the container you can use all hardhat CLI commands

```bash
hh test
hh compile
hh run --network localhost scripts/Greeter.ts
```

### MyEtherWallet

MyEtherWaller running on [localhost:8000](http://localhost:8000)

It can use as an interface for interact with smart contract which deployed in local hardhat node

#### Connect to hardhat node

Step 1. You need one of the accounts from hardhat

Use one of this default accounts which show in hardhat console

![hardhat_accounts](https://user-images.githubusercontent.com/69245613/174842672-516fafc3-e8de-40e9-adc1-5ea1644a6ae8.png)

Or you can use your own accounts from mnemonic (from MetaMask for example)

Add your mnemonic in the .env file

Uncomment these lines in the hardhat.config.ts file and restart container

![config](https://user-images.githubusercontent.com/69245613/174856954-702785a6-8d48-4405-82ee-37647f927007.png)


Step 2. Go to [localhost:8000](http://localhost:8000) and access your wallet

Use for this private key from hardhat accounts or connect to MyEtherWallet with [MetaMask](https://metamask.io/) browser extension


Step 3. Сhange network to localhost

![Снимок экрана 2022-06-21 в 15 59 19](https://user-images.githubusercontent.com/69245613/174855510-c7b5cb6d-7d8d-4a2d-8160-5bd80e671675.png)


Step 4. Congrats, you connect to local hardhat node!

Now you can use it for interact with smart contract which deployed in local hardhat node

![interact](https://user-images.githubusercontent.com/69245613/174860134-6f64563d-3094-4e60-89cb-6fea8a10fb4f.png)


And one more thing

If you use MetaMask extension you have also need to change localhost network settings

![metamask](https://user-images.githubusercontent.com/69245613/174860346-077678c5-f23f-41e9-b2b3-2ed99d12706e.png)
