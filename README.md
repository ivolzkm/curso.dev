# 📚 Documentação do Projeto

## 📂 Estrutura do Projeto
```
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
├── app/
│   ├── page.js
│   └── layout.js
├── tests/
│   ├── calculadora.test.js
│   └── healthcheck.test.js
├── jest.config.js
├── jest.setup.js
├── package.json
└── README.md
```

## 🏗️ Arquitetura MVC

O projeto segue o padrão **MVC (Model-View-Controller)**, organizando o código de forma modular e mantendo as responsabilidades bem definidas:

| Camada | Pasta | Responsabilidade |
|--------|-------|------------------|
| **Model** | `models/` | Regras de negócio e lógica de dados |
| **View** | `pages/` | Interface do usuário (o que ele vê) |
| **Controller** | `pages/api/` (embutido) | Intermédio entre o clique do usuário e o dado |
| **Infra** | `infra/` | Configurações técnicas (Banco de dados, Migrations, Servidor) |

## 📁 Organização de Pastas

### 🎨 **app/**
Contém as páginas e componentes da interface do usuário.
- `page.js` - Página principal
- `layout.js` - Layout padrão da aplicação

### 🗃️ **models/**
Gerencia a lógica de negócio e acesso aos dados.
- `user.js` - Modelo de usuários
- `content.js` - Modelo de conteúdo
- `password.js` - Gerenciamento de senhas

### ⚙️ **infra/**
Configurações de infraestrutura e banco de dados.
- `database.js` - Configuração do banco de dados
- **migrations/** - Scripts de migração do banco
- **provisioning/** - Configurações de ambiente
  - **staging/** - Ambiente de homologação
  - **production/** - Ambiente de produção

### 🧪 **tests/**
Testes automatizados da aplicação.
- `calculadora.test.js` - Testes da calculadora
- `healthcheck.test.js` - Testes de verificação de saúde

## 🛠️ Arquivos de Configuração

- `jest.config.js` - Configuração do Jest para testes
- `jest.setup.js` - Setup inicial dos testes
- `package.json` - Dependências e scripts do projeto
- `README.md` - Documentação do projeto
