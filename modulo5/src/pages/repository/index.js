import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

export default class repository extends Component {
    state = {
        repository: {},
        issues: [],
        loading: true,
    };

    async componentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        const [repository1, issues] = await Promise.all([
            api.get(`repos/${repoName}`),
            api.get(`repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5,
                },
            }),
        ]);

        this.setState({
            repository: repository1.data,
            issues: issues.data,
            loading: false,
        });
    }

    render() {
        const { repository, issues, loading } = this.state;

        if (loading) {
        }
        return <h1>repository: </h1>;
    }
}

repository.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            repository: PropTypes.string,
        }),
    }).isRequired,
};
