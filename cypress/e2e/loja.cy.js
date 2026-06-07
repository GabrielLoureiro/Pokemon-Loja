describe('Validação da Vitrine - Pokémon Loja', () => {
  
  beforeEach(() => {
    // Acessa o endereço local onde a sua loja roda
    cy.visit('http://localhost:3000');
  });

  it('Deve carregar a página inicial com a identidade visual correta', () => {
    // 1. Valida se o cabeçalho laranja da loja está visível
    cy.get('header').should('be.visible').and('contain', 'Loja Pokemon');
    
    // 2. Valida se o contador do carrinho inicia zerado
    cy.contains('Carrinho: 0 itens').should('be.visible');
  });

    it('Deve renderizar os cards de produtos com imagem, nome e preço', () => {
    // 1. Aguarda explicitamente até que pelo menos um card de Pokémon seja injetado na tela pela API
    cy.get('.product-list article', { timeout: 10000 }).should('have.length.at.least', 1);

    // 2. Garante que a lista de produtos (grid) agora está visível com conteúdo
    cy.get('.product-list').should('be.visible');

    // 3. Pega o primeiro card e valida se ele possui todos os elementos obrigatórios
    cy.get('.product-list article').first().within(() => {
      cy.get('img').should('be.visible'); 
      cy.get('strong').should('not.be.empty'); 
      cy.get('p').should('contain', 'R$'); 
      cy.get('a').should('contain', 'Comprar'); 
    });
  });


  it('Deve incrementar o contador do carrinho ao clicar em Comprar', () => {
    // 1. Clica no botão "Comprar" do primeiro Pokémon da lista
    cy.get('.product-list article a').first().click();

    // 2. Valida se o contador mudou instantaneamente para 1 item
    cy.contains('Carrinho: 1 itens').should('be.visible');
  });
});
