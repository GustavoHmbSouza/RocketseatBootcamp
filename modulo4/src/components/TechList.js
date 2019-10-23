import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component{
    state = {
        newTech: '',
        techs: []
    };

    //Executado assim que o componente aparece em tela
    componentDidMount()
    {
        const techs = localStorage.getItem('techs');

        if (techs)
        {
            this.setState({ techs: JSON.parse(techs) });
        }
    }

    //Executado sempre que houver alterações nas props ou estado
    componentDidUpdate(_, prevState)
    {
        if(prevState.techs !== this.state.techs)
        {
            localStorage.setItem('techs', JSON.stringify(this.state.techs));
        }
    }

    //Executado quando o componente deixa de existir
    componentWillUnmount()
    {

    }

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
                    {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />)}
                    <TechItem />
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