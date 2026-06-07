# language: pt
Funcionalidade: Carrinho de Compras da Loja Pokémon

  Contexto:
    Dado que eu estou na página inicial da loja Pokémon

  Cenário: Adicionar o primeiro Pokémon ao carrinho com sucesso
    Quando eu clico no botão "Comprar" do primeiro produto listado
    Então o contador do carrinho deve exibir "1 itens"
