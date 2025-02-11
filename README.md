# ⛓️ Blockchain Voting System

**Decentralized voting platform ensuring transparent and tamper-proof elections**  
[![Ethereum](https://img.shields.io/badge/Blockchain-Ethereum-3C3C3D?logo=ethereum)](https://ethereum.org)
[![Hardhat](https://img.shields.io/badge/Framework-Hardhat-FFF100?logo=hardhat)](https://hardhat.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

*Portuguese: [Leia em Português](#)*

---

## 🎯 Core Features

### Election Management
- **Candidate Registration** - Admin-only candidate addition
- **Voter Enrollment** - Whitelist verified participants
- **Voting Sessions** - Time-bound election periods

### Voting Process
- 🗳️ Secure ballot casting
- 🔒 Immutable vote recording
- 📊 Real-time result tracking

### Administrative Control
- 🕒 Session management (open/close voting)
- 🔍 Transparent result auditing
- 🛡️ Role-based access control

---

## 🚀 Quick Start

### 1. Local Network Setup
```bash
npx hardhat node
```
*Launches local Ethereum node with 20 test accounts*

### 2. Contract Deployment
```bash
npx hardhat run scripts/deploy.js --network localhost
```
*Deploys VotingContract.sol to local network*

### 3. Interaction Scripts
```bash
npx hardhat run scripts/interact.js --network localhost
```
*Sample workflow:*
1. Admin adds candidates
2. Register voters
3. Open voting session
4. Cast votes
5. Close session
6. Tally results

---

## 🧩 Smart Contract Architecture

```solidity
// Simplified Interface
contract VotingSystem {
    function addCandidate(string memory _name) public onlyAdmin {}
    function registerVoter(address _voter) public onlyAdmin {}
    function vote(uint256 _candidateId) public onlyRegisteredVoter {}
    function getResults() public view returns (uint256[] memory) {}
}
```

---

## 📂 Project Structure
```
.
├── contracts/           # Solidity smart contracts
│   └── VotingContract.sol
├── scripts/            # Interaction scripts
│   ├── deploy.js
│   └── interact.js
├── test/               # Test suite
├── hardhat.config.js   # Network configuration
└── ...                 # Standard Hardhat setup
```

---

## 🔧 Development Workflow

### Testing
```bash
npx hardhat test
```

### Script Customization
1. Update `interact.js` with contract address
2. Modify candidate/voter parameters
3. Add new transaction workflows

---

## 📜 License
MIT Licensed - Full terms in [LICENSE](LICENSE)
