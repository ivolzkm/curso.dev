<<<<<<< HEAD

### Arquitetura MVC
=======
<<<<<<< HEAD
>>>>>>> fca2230 (Atualiza os testes)

### 📂 Estrutura do Projeto

.
├── infra/
│   ├── database.js
│   ├── migrations/
│   └── provisioning/
│       ├── production/
│       └── staging/
├── models/
│   ├── content.js
│   ├── password.js
│   └── user.js
├── pages/
│   ├── index.js
│   └── layout.js
├── tests/
│   ├── calculadora.test.js
│   └── healthcheck.test.js
├── jest.config.js
├── jest.setup.js
├── package.json
└── README.md


<<<<<<< HEAD
Model,models/,Regras de negócio e lógica de dados.
View,pages/,Interface do usuário (o que ele vê).
Controller,(Embutido ou em pages/api),Intermédio entre o clique do usuário e o dado.
Infra,infra/,"Configurações técnicas (Banco de dados, Migrations, Servidor)."
=======
### Organização de pastas

- **root/**
  - **pages/**
    - index.js
  - **models/**
    - users.js
    - content.js
    - password.js
  - **infra/**
    - database.js
    - **migrations/**
    - **provisioning/**
      - **staging/**
      - **production/**
  - **tests/**
>>>>>>> c6c307a (Implementa testes automatizados)
```
>>>>>>> fca2230 (Atualiza os testes)
