# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Install OpenZeppeling contracts
```shell
npm install --save-dev @openzeppelin/contracts
```

Setup env for Sepolia network
```shell
npx hardhat vars set PRIVATE_KEY
npx hardhat vars set SEPOLIA_API_KEY # Alchemy provider
npx hardhat run scripts/deploy.js
```

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```