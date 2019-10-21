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
TechItem.defaultProps = {
    tech: 'Oculto',
};

TechItem.PropTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default TechItem;