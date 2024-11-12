const hre = require("hardhat");

async function main() {
  const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");
  const votingSystem = await VotingSystem.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  const [owner, voter1] = await ethers.getSigners();

  console.log("Adding candidates...");
  await votingSystem.addCandidate("Alice");
  await votingSystem.addCandidate("Bob");

  console.log("Registering voters...");
  await votingSystem.registerVoter(voter1.address);

  console.log("Opening voting...");
  await votingSystem.openVoting();

  console.log("Voting...");
  await votingSystem.connect(voter1).vote(1);

  console.log("Closing voting...");
  await votingSystem.closeVoting();

  console.log("Results:");
  const candidate1 = await votingSystem.getCandidate(1);
  console.log(`Candidate: ${candidate1[0]}, Votes: ${candidate1[1]}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
