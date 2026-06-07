# 🛒 Pokémon Loja - E-commerce & Testes Automatizados

Este repositório armazena uma aplicação front-end desenvolvida em **React** integrada à **PokeAPI** para listagem dinâmica de produtos (Pokémon). O projeto foi refatorado para servir como portfólio técnico focado em **Engenharia de Software, DevSecOps e Quality Assurance (QA)**.

---

## 🚀 Funcionalidades Implementadas

* **Consumo de API Assíncrono:** Utilização do `Axios` para buscas paralelas via `Promise.all` coletando metadados, imagens oficiais e calculando preços dinâmicos.
* **Vitrine Responsiva:** Interface reestruturada de layout linear para um modelo de grade profissional utilizando **CSS Grid Layout** (`auto-fill / minmax`).
* **Carrinho de Compras Interativo:** Sistema dinâmico em tempo de execução para adição de itens ao carrinho com manipulação de estado (`prevState`) e interceptação de rotas padrões (`preventDefault`).

---

## 🔒 Segurança & DevSecOps

Como parte das boas práticas de engenharia de software, o repositório passou por uma auditoria de segurança assistida pelo **GitHub Dependabot**:
* **Mitigação de Vulnerabilidades:** Correção ativa de falhas de alta severidade (como ReDoS - CWE-1333) através do upgrade controlado do pacote `axios` para versões seguras (`^0.32.0`).

---

## 🛠️ Tecnologias Utilizadas

* **Front-End:** React (Class Components), JSX, CSS3 (Grid e Flexbox)
* **Integração:** Axios, PokeAPI
* **Segurança:** GitHub Dependabot (DevSecOps)
* **Ambiente & Pacotes:** Node.js, npm / Yarn

---

## 💻 Como Rodar o Projeto Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com
cd Pokemon-Loja
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Configurar compatibilidade de criptografia (Se necessário)
Em ambientes Windows com Node.js v17+ ou superior, execute no terminal antes de inicializar:
```powershell
\$env:NODE_OPTIONS="--openssl-legacy-provider"
```

### 4. Inicializar a aplicação
```bash
npm start
```
A aplicação abrirá automaticamente no endereço: `http://localhost:3000`

---

## 🧪 Estrutura de Qualidade (QA) - Próximos Passos
* [ ] Implementação de **Testes de Fumaça (Smoke Tests)** com **Cypress** para validação de carregamento da Home.
* [ ] Automação de cenários de ponta a ponta (E2E) simulando adições de itens ao carrinho de compras.
* [ ] Estruturação de cenários em BDD utilizando sintaxe **Gherkin / Cucumber**.
