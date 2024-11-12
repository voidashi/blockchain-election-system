# Sistema de Votação Blockchain

Este projeto implementa um **Sistema de Votação Blockchain** simples utilizando **Ethereum** e **Hardhat**. O contrato permite adicionar candidatos, registrar eleitores, abrir/fechar sessões de votação e contar votos. O objetivo é fornecer transparência e segurança para o processo de votação.

---

### **Funcionalidades:**
- **Adicionar Candidatos**: O administrador pode adicionar candidatos à eleição.
- **Registrar Eleitores**: O administrador pode registrar eleitores.
- **Votação**: Eleitores registrados podem votar nos candidatos.
- **Controle de Votação**: O administrador pode abrir e fechar o período de votação.
- **Resultados**: Após o fechamento da votação, é possível consultar os resultados.

---

### **Como Executar:**

#### 1. **Iniciar o Nó Local**

Para interagir com o contrato, certifique-se de que você tenha uma rede local do Hardhat em execução:

```bash
npx hardhat node
```

Isso irá fornecer uma lista de contas de teste com chaves privadas.

---

#### 2. **Deploy do Contrato**

Certifique-se de que o contrato esteja implantado em uma rede local do Hardhat.

#### **Script de Deploy** (`scripts/deploy.js`):

Execute o script de deploy:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

---

#### 3. **Executar Scripts Automáticos**

Execute o script para interagir com o contrato:

```bash
npx hardhat run scripts/interact.js --network localhost
```

Lembre-se de editar o script com o endereço do contrato, se necessário.

Outros scripts de interacao estao disponiveis em `scripts/`

---


### **Licença**

Este projeto é licenciado sob a Licença MIT.
