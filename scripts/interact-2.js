// Demonstra um erro ao tentar votar após o encerramento da votação
const hre = require("hardhat");

async function main() {
  const VotingSystem = await hre.ethers.getContractFactory("VotingSystem");
  const votingSystem = await VotingSystem.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  const [owner, voter1, voter2, voter3] = await ethers.getSigners();

  console.log("Adding candidates...");
  await votingSystem.addCandidate("Alice");
  await votingSystem.addCandidate("Bob");
  await votingSystem.addCandidate("Charlie");

  console.log("Registering voters...");
  await votingSystem.registerVoter(voter1.address);
  await votingSystem.registerVoter(voter2.address);
  await votingSystem.registerVoter(voter3.address);

  console.log("Opening voting...");
  await votingSystem.openVoting();

  console.log("Voter 1 voting for candidate 1...");
  await votingSystem.connect(voter1).vote(1);

  console.log("Voter 2 voting for candidate 2...");
  await votingSystem.connect(voter2).vote(2);

  console.log("Voter 3 voting for candidate 1...");
  await votingSystem.connect(voter3).vote(1);

  console.log("Closing voting...");
  await votingSystem.closeVoting();

  console.log("Results:");
  for (let i = 1; i <= 3; i++) {
    const candidate = await votingSystem.getCandidate(i);
    console.log(`Candidate ${candidate[0]} received ${candidate[1]} votes.`);
  }

  console.log("Attempting to vote after voting is closed (should fail)...");
  try {
    await votingSystem.connect(voter1).vote(2);
  } catch (error) {
    console.log(`Expected error: ${error.message}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
