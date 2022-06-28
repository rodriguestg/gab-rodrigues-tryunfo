import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCart: 'Nome da carta',
      imageCart: 'url',
      description: 'Descrição',
      power: 0,
      stamina: 0,
      defense: 0,
      raridade: 'Normal',
      trunfo: false,
    };
  }

  inputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    console.log(target);
    const valueResult = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueResult,
    });
    console.log(valueResult);
  };

  render() {
    const { nameCart, imageCart, description, power,
      stamina, defense, raridade, trunfo } = this.state;
    return (
      <div>
        <h1>Oi Tryunfo</h1>
        <Form onInputChange={ this.inputChange } />
        <Card
          cardName={ nameCart }
          cardImage={ imageCart }
          cardDescription={ description }
          cardAttr1={ power }
          cardAttr2={ stamina }
          cardAttr3={ defense }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
