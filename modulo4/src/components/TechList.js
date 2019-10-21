import React, { Component } from 'react';

class TechList extends Component{
    state = {
        newTech: '',
        techs: ['Node.js',
                'ReactJs',
                'ReactNative'     
            ]
    };

    handleInputChange = e => 
    {
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => 
    {
        //pega o valor antigo e soma com o novo
        this.setState({ 
                        techs: [...this.state.techs, this.state.newTech],        
                        newTech: ''          //substitui o valor antigo
                      });
    }

    handleDelete = (tech) =>
    {
        //Retira aquela Tech
        this.setState({ techs: this.state.techs.filter(t => t != tech) });
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}>
                            {tech}
                            <button onClick={() =>this.handleDelete(tech)}>Remover</button>
                        </li>
                    ))}
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInputChange}
                    value={this.state.newTech} />
                <button onClick={this.handleSubmit}>aaa</button>
            </>
        );
    }
}

export default TechList;