import React from 'react';
import TechList from './TechList';

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

export default TechItem;