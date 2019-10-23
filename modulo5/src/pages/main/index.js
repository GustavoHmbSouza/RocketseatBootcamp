import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton, List } from './styles';

import api from '../../services/app';

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRepo: '',
            repositories: [],
            loading: false,
        };
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newRepo, repositories } = this.state;
        const response = await api.get(`/repos/${newRepo}`);

        const data = {
            name: response.data.full_name,
        };

        this.setState({
            newRepo: '',
            repositories: [...repositories, data],
            loading: false,
        });

        // rocketseat/unform
        // gustavohmbsouza/rocketseatbootcamp
    };

    render() {
        const { newRepo, repositories, loading } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositorios
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar repositório"
                        valor={newRepo}
                        onChange={this.handleInputChange}
                    />

                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#fff" size={14} />
                        )}
                    </SubmitButton>
                </Form>
                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <spam>{repository.name}</spam>
                            <a href="">Detalhes</a>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
