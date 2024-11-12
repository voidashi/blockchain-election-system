const hre = require("hardhat");

async function main() {
  const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");
  const votingSystem = await VotingSystem.deploy(); // Deploy the contract

  await votingSystem.waitForDeployment(); // Await deployment confirmation

  console.log("VotingSystem deployed to:", votingSystem.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
