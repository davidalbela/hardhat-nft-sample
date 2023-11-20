async function main() {
    const Web3NFT = await hre.ethers.getContractFactory("Web3NFT");
    const web3NFT = await Web3NFT.deploy("Web3NFT", "WFT");
  
    await web3NFT.deployed();
  
    console.log("Web3NFT deployed to:", web3NFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });