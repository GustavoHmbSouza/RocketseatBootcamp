import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import Html from './html';

class Home extends Component {
    state = {
        products: [],
        loading: false,
    };

    async componentDidMount() {
        const response = await api.get('products');

        const data = response.data.map(product => ({
            ...product,
            priceFormated: formatPrice(product.price),
        }));

        this.setState({
            products: data,
            loading: true,
        });
    }

    handleAddProduct = product => {
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };

    render() {
        const { loading, products } = this.state;

        if (loading) {
            return (
                <Html
                    products={products}
                    handleAddProduct={this.handleAddProduct}
                />
            );
        }
        return <></>;
    }
}

export default connect()(Home);
