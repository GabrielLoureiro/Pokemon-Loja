import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu estou na página inicial da loja Pokémon", () => {
  cy.visit("http://localhost:3000");
  // Espera a API renderizar a vitrine
  cy.get('.product-list article', { timeout: 10000 }).should('have.length.at.least', 1);
});

When("eu clico no botão \"Comprar\" do primeiro produto listado", () => {
  cy.get('.product-list article a').first().click();
});

Then("o contador do carrinho deve exibir {string}", (quantidadeEsperada) => {
  cy.contains(`Carrinho: ${quantidadeEsperada}`).should('be.visible');
});
