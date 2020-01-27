import React from 'react';
import PropTypes from 'prop-types';

function TechItem(props)
{
    return (
        <li>
            {props.tech}
            <button onClick={props.onDelete}>Remover</button>
        </li>
    )
    
}

//Setando valores default nas props
//É diferente a implementação na classe..
TechItem.defaultProps = {
    tech: 'Oculto',
};

//Setando types para variaveis 
//É diferente a implementação na classe..
TechItem.PropTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default TechItem;