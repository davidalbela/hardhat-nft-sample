const { expect } = require("chai");

describe("Web3NFT", function () {
  it("Should return the right name and symbol", async function () {
    const Web3NFT = await hre.ethers.getContractFactory("Web3NFT");
    const web3NFT = await Web3NFT.deploy("Web3NFT", "WFT");

    await web3NFT.deployed();
    expect(await web3NFT.name()).to.equal("Web3NFT");
    expect(await web3NFT.symbol()).to.equal("WFT");
  });
});