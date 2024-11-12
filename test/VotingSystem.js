const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VotingSystem", function () {
  let VotingSystem, votingSystem, owner, voter1, voter2;

  beforeEach(async function () {
    [owner, voter1, voter2] = await ethers.getSigners();
    VotingSystem = await ethers.getContractFactory("VotingSystem");
  
    // Deploy e obtenha a instância diretamente
    votingSystem = await VotingSystem.deploy();
  
    // Não é necessário chamar .wait() ou .deployed()
  });

  it("Should deploy the contract and set admin correctly", async function () {
    expect(await votingSystem.admin()).to.equal(owner.address);
  });

  it("Should allow admin to add candidates and register voters", async function () {
    await votingSystem.addCandidate("Candidate 1");
    const candidate = await votingSystem.candidates(1);
    expect(candidate.name).to.equal("Candidate 1");

    await votingSystem.registerVoter(voter1.address);
    const voter = await votingSystem.voters(voter1.address);
    expect(voter.isRegistered).to.be.true;
  });

  it("Should allow registered voter to vote", async function () {
    await votingSystem.addCandidate("Candidate 1");
    await votingSystem.registerVoter(voter1.address);

    await votingSystem.openVoting();
    await votingSystem.connect(voter1).vote(1);

    const candidate = await votingSystem.candidates(1);
    expect(candidate.voteCount).to.equal(1);
  });

  it("Should prevent double voting", async function () {
    await votingSystem.addCandidate("Candidate 1");
    await votingSystem.registerVoter(voter1.address);

    await votingSystem.openVoting();
    await votingSystem.connect(voter1).vote(1);

    await expect(votingSystem.connect(voter1).vote(1)).to.be.revertedWith("You have already voted.");
  });
});
