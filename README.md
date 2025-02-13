# 💎 Blockchain Voting System  

*A simple and transparent blockchain-based voting system built with Ethereum & Hardhat.*  

[![Ethereum](https://img.shields.io/badge/Platform-Ethereum-informational?style=flat&logo=ethereum&logoColor=white)](https://ethereum.org/)  
[![Hardhat](https://img.shields.io/badge/Tool-Hardhat-informational?style=flat&logo=hardhat&logoColor=white)](https://hardhat.org/)  
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)  

---

## 📦 Features  

### **Core Functionality**  
- **Candidate Management:** Add/remove election candidates (admin-only).  
- **Voter Registration:** Authorize voters via admin-controlled whitelist.  
- **Voting Session Control:** Open/close voting periods dynamically.  
- **Transparent Results:** Query final vote counts post-election.  

### **Key Advantages**  
- **Immutable Records:** Votes are stored securely on the blockchain.  
- **Role-Based Access:** Clear separation between admin and voter actions.  
- **Local Testing:** Built for Hardhat’s local network development.  

---

## 🚀 Getting Started  

### **Start Local Node**  
Run a local Hardhat network:  
```bash  
npx hardhat node  
```  
*(Test accounts with private keys will be generated.)*  

### **Deploy Contract**  
Execute the deployment script:  
```bash  
npx hardhat run scripts/deploy.js --network localhost  
```  

### **Interact with Contract**  
Run automated interaction scripts (e.g., voting simulation):  
```bash  
npx hardhat run scripts/interact.js --network localhost  
```  
**Note:** Update contract addresses in scripts if needed!  

---

## 🛠️ Scripts  
- `deploy.js`: Deploys the voting contract.  
- `interact.js`: Demonstrates voter registration, voting, and result checks.  
- Customize scripts in `/scripts` for specific use cases.  

---

## 🤝 Contributing  
Found an issue or improvement?  
- Open an **Issue** for bugs or feature requests.  
- Submit a **Pull Request** for documented fixes.  

---

## 📄 License  
MIT Licensed - See [LICENSE](LICENSE) for details.  

---  

*Democracy meets decentralization—transparently.*  
