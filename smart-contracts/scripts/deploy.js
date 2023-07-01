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

//npx hardhat run scripts/deploy.js --network fantomMain
//npx hardhat verify --network fantomMain 0x24c23a634dC1dD033Dc2B2063bc689BD35BE610f 