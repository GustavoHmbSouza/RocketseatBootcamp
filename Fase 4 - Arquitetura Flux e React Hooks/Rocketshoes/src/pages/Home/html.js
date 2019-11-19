import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Html(props) {
    const { products, handleAddProduct } = props;

    return (
        <>
            <ProductList>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormated}</span>
                        <button
                            type="button"
                            onClick={() => handleAddProduct(product)}
                        >
                            <div>
                                <MdShoppingCart size="16" color="#FFF" /> 3
                            </div>

                            <span>Adicionar ao Carrinho</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        </>
    );
}
