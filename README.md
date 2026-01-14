
### Arquitetura MVC

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


Model,models/,Regras de negócio e lógica de dados.
View,pages/,Interface do usuário (o que ele vê).
Controller,(Embutido ou em pages/api),Intermédio entre o clique do usuário e o dado.
Infra,infra/,"Configurações técnicas (Banco de dados, Migrations, Servidor)."
