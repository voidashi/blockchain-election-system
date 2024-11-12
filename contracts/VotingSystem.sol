// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint votedCandidateId;
    }

    mapping(address => Voter) public voters;
    mapping(uint => Candidate) public candidates;

    address public admin;
    uint public candidatesCount;
    bool public votingOpen;

    event Voted(address indexed voter, uint candidateId);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action.");
        _;
    }

    modifier whenVotingOpen() {
        require(votingOpen, "Voting is not open.");
        _;
    }

    constructor() {
        admin = msg.sender;
        votingOpen = false;
    }

    function addCandidate(string memory _name) public onlyAdmin {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function registerVoter(address _voter) public onlyAdmin {
        require(!voters[_voter].isRegistered, "Voter already registered.");
        voters[_voter] = Voter(true, false, 0);
    }

    function openVoting() public onlyAdmin {
        votingOpen = true;
    }

    function closeVoting() public onlyAdmin {
        votingOpen = false;
    }

    function vote(uint _candidateId) public whenVotingOpen {
        Voter storage sender = voters[msg.sender];
        require(sender.isRegistered, "You are not registered to vote.");
        require(!sender.hasVoted, "You have already voted.");
        require(candidates[_candidateId].id != 0, "Invalid candidate.");

        sender.hasVoted = true;
        sender.votedCandidateId = _candidateId;

        candidates[_candidateId].voteCount++;

        emit Voted(msg.sender, _candidateId);
    }

    function getCandidate(uint _candidateId) public view returns (string memory name, uint voteCount) {
        require(!votingOpen, "Results available after voting closes.");
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.name, candidate.voteCount);
    }
}
