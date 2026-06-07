# 🛒 Pokémon Loja - E-commerce & Testes Automatizados

Este repositório armazena uma aplicação front-end desenvolvida em **React** integrada à **PokeAPI** para listagem dinâmica de produtos (Pokémon). O projeto foi refatorado para servir como portfólio técnico completo focado em **Engenharia de Software, DevSecOps e Quality Assurance (QA)**.

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

## 🧪 Engenharia de Qualidade (QA) - Automação & BDD

A aplicação conta com uma esteira de testes de ponta a ponta (E2E) estruturada com o framework **Cypress** integrado ao **Cucumber** para desenvolvimento guiado por comportamento (**BDD**).

### Cenários Cobertos em Gherkin (`.feature`):
* **Identidade Visual & Negócio:** Validação de inicialização do estado do carrinho e renderização de componentes de interface.
* **Resiliência Assíncrona:** Gerenciamento dinâmico de tempo de resposta da PokeAPI (`timeout: 10s`) mitigando testes intermitentes (*flaky tests*).
* **Fluxo de Integração:** Simulação de interações do usuário (clique no botão de compras) com asserção do incremento de itens no carrinho em tempo real baseado em especificações escritas em linguagem natural.

---

## 🛠️ Tecnologias Utilizadas

* **Front-End:** React (Class Components), JSX, CSS3 (Grid e Flexbox)
* **Integração:** Axios, PokeAPI
* **Automação de Testes:** Cypress E2E & @badeball/cypress-cucumber-preprocessor (Cucumber / BDD)
* **Segurança:** GitHub Dependabot (DevSecOps)
* **Ambiente & Pacotes:** Node.js, npm / Yarn

---

## 💻 Como Rodar o Projeto e os Testes Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com
cd Pokemon-Loja
```

### 2. Instalar as dependências
```bash
npm install --legacy-peer-deps
```

### 3. Configurar compatibilidade de criptografia (Se necessário no Windows)
```powershell
\$env:NODE_OPTIONS="--openssl-legacy-provider"
```

### 4. Inicializar a aplicação (Loja)
```bash
npm start
```
A aplicação abrirá no endereço: `http://localhost:3000`

### 5. Executar os cenários de Teste em BDD (Cypress + Cucumber)
Com a loja rodando em segundo plano, abra um novo terminal e execute:
```bash
npx cypress open
```
No painel do Cypress, selecione **E2E Testing** e clique no arquivo `carrinho.feature` para assistir ao robô rodar as validações de comportamento automaticamente.
