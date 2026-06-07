import React, { Component } from 'react';
import axios from 'axios';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        products: [],
        // 1. Criamos um estado inicial para guardar os itens adicionados ao carrinho
        cart: []
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        try {
            const response = await api.get('/pokemon?offset=300&limit=100');
            const listaBasica = response.data.results;

            const buscarDetalhes = listaBasica.map(async (p) => {
                const detalheResponse = await axios.get(p.url);
                const dadosPoke = detalheResponse.data;

                return {
                    _id: dadosPoke.id,
                    name: dadosPoke.name,
                    image: dadosPoke.sprites.front_default,
                    price: (dadosPoke.weight * 0.4).toFixed(2)
                };
            });

            const produtosCompletos = await Promise.all(buscarDetalhes);
            this.setState({ products: produtosCompletos });

        } catch (error) {
            console.error("Erro ao carregar dados da PokeAPI:", error);
        }
    };

    // 2. Função para adicionar um Pokémon ao carrinho sem duplicar estado incorretamente
    addToCart = (product, e) => {
        e.preventDefault(); // Impede o link <a> de recarregar a página por padrão
        
        this.setState(prevState => ({
            cart: [...prevState.cart, product]
        }), () => {
            // Exibe um alerta rápido ou log para confirmar que funcionou
            console.log("Itens no carrinho:", this.state.cart);
        });
    };

    render(){
        const { products, cart } = this.state;

        return(
            <div>
                {/* 3. Um contador visual do carrinho bem no topo da vitrine */}
                <div style={{ 
                    maxWidth: '1200px', 
                    margin: '20px auto 0', 
                    padding: '0 20px', 
                    textAlign: 'right',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#333'
                }}>
                    🛒 Carrinho: <span style={{ color: '#da552f', background: '#ffeae4', padding: '5px 12px', borderRadius: '20px' }}>{cart.length} itens</span>
                </div>

                <div className='product-list'>
                    {products.map(product => (
                        <article key={product._id}>
                            {product.image && (
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    style={{ width: '130px', height: '130px', display: 'block', margin: '0 auto' }} 
                                />
                            )}
                            
                            <strong>{product.name}</strong>
                            
                            <p className="product-price" style={{ margin: '10px 0', color: '#da552f', fontWeight: 'bold' }}>
                                R$ {product.price}
                            </p>

                            {/* 4. Mudamos o clique para chamar a nossa nova função */}
                            <a href='/' onClick={(e) => this.addToCart(product, e)}>Comprar</a>
                        </article>                    
                    ))}
                </div>
            </div>
        );
    }
}