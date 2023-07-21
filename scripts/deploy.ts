import { ethers } from "hardhat";

async function main() {
  const TestHook = await ethers.getContractFactory("TestHook");
  const testHook = await TestHook.deploy();

  await testHook.deployed();

  console.log("TestHook deployed to:", testHook.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });