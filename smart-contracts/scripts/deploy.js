const hre = require("hardhat");
const fs = require("fs");
async function main() {
  const Qisa = await hre.ethers.getContractFactory("Qisa");
  const qisa = await Qisa.deploy();
  console.log("deployed" , qisa)

  await qisa.waitForDeployment();

  console.log("qisa deployed to:", qisa.target);

  fs.writeFileSync(
    "./contractAddress.js", `
    export const qisaAddress = "${qisa.target}";
    `
  )

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//npx hardhat run scripts/deploy.js --network fantomTest
//npx hardhat verify --network fantomTest 0x342C3Eb307306C22b226A32985E344B603eb5E37 