
### Arquitetura MVC

### 📂 Estrutura do Projeto

.
├── infra/              # Configurações de infraestrutura e banco de dados
│   ├── database.js     # Conexão e lógica do banco de dados
│   ├── migrations/     # Scripts de migração de schema
│   └── provisioning/   # Scripts de provisionamento (Terraform, Ansible, etc)
│       ├── production/
│       └── staging/
├── models/             # Regras de negócio e representação de dados
│   ├── content.js
│   ├── password.js
│   └── user.js
├── pages/              # Interface do usuário (UI) e rotas do frontend
│   ├── index.js
│   └── layout.js
├── tests/              # Testes automatizados da aplicação
│   ├── calculadora.test.js
│   └── healthcheck.test.js
├── jest.config.js      # Configuração do framework de testes Jest
├── jest.setup.js       # Scripts de inicialização dos testes
├── package.json        # Manifest do projeto e dependências
└── README.md           # Documentação principal
